import { Resend } from 'resend'

const TOPICS = ['Robotics', 'GIS · AI', 'Defence brief', 'Research / collab', 'Other']

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, org, topic, message } = req.body || {}

  if (typeof name !== 'string' || !name.trim() ||
      typeof email !== 'string' || !email.trim() ||
      typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ ok: false, error: 'Name, email and message are required.' })
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email.trim())) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' })
  }

  const safeName = name.trim().slice(0, 200)
  const safeEmail = email.trim().slice(0, 200)
  const safeOrg = (org || '').trim().slice(0, 200)
  const safeTopic = TOPICS.includes(topic) ? topic : 'Other'
  const safeMessage = message.trim().slice(0, 5000)

  const { RESEND_API_KEY, NOREPLY_EMAIL, ENQUIRY_EMAIL, ADMIN_EMAIL } = process.env
  if (!RESEND_API_KEY || !NOREPLY_EMAIL || !ENQUIRY_EMAIL || !ADMIN_EMAIL) {
    console.error('Missing Resend env vars')
    return res.status(500).json({ ok: false, error: 'Server is not configured.' })
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: `Yantrikaran Enquiries <${ENQUIRY_EMAIL}>`,
      to: ADMIN_EMAIL,
      replyTo: safeEmail,
      subject: `[${safeTopic}] Project enquiry — ${safeName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Organisation:</strong> ${escapeHtml(safeOrg) || '—'}</p>
        <p><strong>Topic:</strong> ${escapeHtml(safeTopic)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(safeMessage).replace(/\n/g, '<br/>')}</p>
      `,
    })

    await resend.emails.send({
      from: `Yantrikaran <${NOREPLY_EMAIL}>`,
      to: safeEmail,
      subject: 'We received your enquiry — Yantrikaran',
      html: `
        <p>Hi ${escapeHtml(safeName)},</p>
        <p>Thanks for reaching out to Yantrikaran. We've received your enquiry about <strong>${escapeHtml(safeTopic)}</strong> and will respond within two business days.</p>
        <p>— Yantrikaran Innovations</p>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend send failed:', err)
    return res.status(502).json({ ok: false, error: 'Failed to send email.' })
  }
}
