import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Careers', path: '/about#careers' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Automation', path: '/services#automation' },
        { name: 'IoT', path: '/services#iot' },
        { name: 'Software', path: '/services#software' },
        { name: 'Robotics', path: '/services#robotics' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/docs' },
        { name: 'FAQ', path: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/yantrikaran-innovations/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="#0A66C2"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.2 108.1 0 83.9 0 54.05 0 24.2 24.2 0 53.79 0S107.58 24.2 107.58 54.05C107.58 83.9 83.38 108.1 53.79 108.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8V448h-92.7V148.9h89.1v40.7h1.3c12.4-23.5 42.6-48.4 87.7-48.4 93.9 0 111.3 61.8 111.3 142.3V448z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#1DA1F2"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M459.4 151.7c.3 4.5.3 9.1 0 13.6-3.1 76.7-49.9 165.8-140.9 207.6-28.2 11.7-58 18-88.9 18-31.6 0-62-6.9-90.1-20.2 4.4.5 8.9.8 13.4.8 27.5 0 52.8-9.4 73-25.1-25.7-.5-47.4-17.4-54.9-40.7 8.9 1.4 18 1.1 26.6-1.1-27-5.4-47.2-29.2-47.2-57.8v-.7c8 4.4 17.2 7.1 27 7.4-16.1-10.8-26.7-29.3-26.7-50.2 0-11 3-21.3 8.4-30.2 29.4 36 73.4 59.7 123 62.2-1-4.3-1.5-8.8-1.5-13.4 0-32.3 26.1-58.6 58.3-58.6 16.8 0 32 7.1 42.6 18.4 13.3-2.6 25.8-7.4 37.1-14.1-4.4 13.8-13.8 25.4-26 32.7 11.8-1.4 23.1-4.5 33.6-9.1-7.8 11.7-17.6 21.9-28.9 30.1z" />
        </svg>
      ),
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@technotuners1',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FF0000"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a2.995 2.995 0 0 0-2.112-2.116C19.197 3.5 12 3.5 12 3.5s-7.197 0-9.386.57A2.995 2.995 0 0 0 .5 6.186C0 8.377 0 12 0 12s0 3.623.5 5.814a2.995 2.995 0 0 0 2.114 2.116C4.803 20.5 12 20.5 12 20.5s7.197 0 9.386-.57a2.995 2.995 0 0 0 2.112-2.116C24 15.623 24 12 24 12s0-3.623-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="igGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <path
            fill="url(#igGradient)"
            d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 189.6c-41.8 0-75.6-33.8-75.6-75.6S182.3 179.4 224.1 179.4 299.7 213.2 299.7 255 265.9 330.6 224.1 330.6zM370.5 136.1c0 14.9-12.1 27-27.1 27s-27.1-12.1-27.1-27 12.1-27 27.1-27 27.1 12.1 27.1 27zM398.8 80c-9.8-24.5-30.3-45-54.8-54.8C322 16 290.3 16 224.1 16s-98 0-119.9 9.3c-24.5 9.8-45 30.3-54.8 54.8C45 102 45 133.6 45 199.8s0 97.8 9.3 119.9c9.8 24.5 30.3 45 54.8 54.8 21.9 9.3 53.6 9.3 119.8 9.3s98 0 119.9-9.3c24.5-9.8 45-30.3 54.8-54.8 9.3-21.9 9.3-53.6 9.3-119.8s0-98-9.3-119.9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold text-white">YANTRIKARAN</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading the future in automation, IoT, software development, and robotics services.
              We transform ideas into innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-heading font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Yantrikaran. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;