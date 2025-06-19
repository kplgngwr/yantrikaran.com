import { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    
    // In a real application, you would send the form data to a server here
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setFormStatus({
    //     submitted: true,
    //     success: true,
    //     message: 'Thank you for your message! We will get back to you soon.'
    //   });
    //   setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    // })
    // .catch(error => {
    //   setFormStatus({
    //     submitted: true,
    //     success: false,
    //     message: 'There was an error submitting your message. Please try again.'
    //   });
    // });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              variants={fadeIn}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeIn}
            >
              Get in touch with our team to discuss your project or inquire about our services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us directly at</p>
              <a href="tel:+919876543210" className="text-primary font-medium">+91 9876 543 210</a>
            </motion.div>

            <motion.div 
              className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email at</p>
              <a href="mailto:info@yantrikaran.com" className="text-primary font-medium">info@yantrikaran.com</a>
            </motion.div>

            <motion.div 
              className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Visit our office at</p>
              <address className="not-italic text-primary font-medium">
                123 Tech Park, Sector 15<br />
                Gurugram, Haryana 122001
              </address>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="text-3xl font-heading font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </motion.div>

              {formStatus.submitted && (
                <motion.div 
                  className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <motion.form 
                onSubmit={handleSubmit}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn}>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="How can we help you?"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <button
                    type="submit"
                    className="btn bg-primary text-white hover:bg-primary-dark px-8 py-3 w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="h-full min-h-[400px] rounded-lg overflow-hidden"
            >
              {/* Placeholder for Google Map - replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 mb-2">Google Maps will be embedded here</p>
                  <p className="text-sm text-gray-500">Replace with your actual Google Maps embed code</p>
                </div>
              </div>
              {/* Actual Google Maps embed would look like this: */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!...your-embed-code-here" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
              variants={fadeIn}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={fadeIn}
            >
              Find answers to common questions about our services
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                question: 'What industries do you serve?',
                answer: 'We serve a wide range of industries including manufacturing, agriculture, healthcare, logistics, retail, and more. Our solutions are adaptable to various business needs and challenges.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on complexity and scope. A simple automation project might take 4-6 weeks, while a comprehensive IoT or robotics solution could take 3-6 months. We provide detailed timelines during the planning phase.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your solution continues to operate optimally. Our team is available for troubleshooting, updates, and enhancements as needed.'
              },
              {
                question: 'Can you work with our existing systems and infrastructure?',
                answer: 'Absolutely. We specialize in integrating our solutions with existing systems and infrastructure. Our team will assess your current setup and design solutions that complement and enhance your existing capabilities.'
              },
              {
                question: 'How do you ensure the security of IoT and software solutions?',
                answer: 'Security is a top priority in all our solutions. We implement industry best practices for data encryption, secure authentication, regular security updates, and compliance with relevant regulations and standards.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Our pricing is project-based and depends on the scope, complexity, and specific requirements of each solution. We provide detailed quotes after an initial consultation and needs assessment.'
              },
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-6"
              variants={fadeIn}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              variants={fadeIn}
            >
              Contact us today to schedule a consultation with our experts and discover how our solutions can drive innovation and growth for your business.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919876543210" 
                className="btn bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                Call Us Now
              </a>
              <a 
                href="mailto:info@yantrikaran.com" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;