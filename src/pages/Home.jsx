import { Link } from 'react-router-dom';
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

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          {/* Background pattern/grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTQyaC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtNDJoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi00MmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="block">Transforming Ideas into</span>
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Intelligent Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Leading the future in automation, IoT, software development, and robotics services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="relative w-full h-[400px] lg:h-[500px] animate-float">
                {/* Placeholder for hero image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                  <p className="text-center text-lg mt-4">Your company logo/image will go here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Stats/Clients */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '4', label: 'Service Categories' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
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
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={fadeIn}
            >
              We provide end-to-end solutions in automation, IoT, software development, and robotics.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: '🤖',
                title: 'Automation',
                description: 'Streamline your operations with our custom automation solutions designed for efficiency and precision.',
                link: '/services#automation'
              },
              {
                icon: '📱',
                title: 'IoT Solutions',
                description: 'Connect your devices and gather valuable data with our comprehensive IoT infrastructure.',
                link: '/services#iot'
              },
              {
                icon: '💻',
                title: 'Software Development',
                description: 'Custom software solutions tailored to your specific business needs and challenges.',
                link: '/services#software'
              },
              {
                icon: '🦾',
                title: 'Robotics',
                description: 'Cutting-edge robotics solutions for manufacturing, logistics, and specialized applications.',
                link: '/services#robotics'
              },
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card p-6 hover:translate-y-[-8px] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-primary font-medium inline-flex items-center group"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white" id="about">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                {/* Placeholder for about image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-center text-lg">Your company image will go here</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg"></div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold mb-6"
                variants={fadeIn}
              >
                About Yantrikaran
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6"
                variants={fadeIn}
              >
                Yantrikaran is a leading technology company specializing in automation, IoT, software development, and robotics services. We combine innovation with expertise to deliver cutting-edge solutions that drive business growth and operational excellence.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-8"
                variants={fadeIn}
              >
                Our team of skilled engineers and developers work closely with clients to understand their unique challenges and create tailored solutions that exceed expectations.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-50">
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
              Our Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={fadeIn}
            >
              Explore our portfolio of successful projects across various industries.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Smart Factory Automation',
                category: 'Automation',
                image: 'factory.jpg',
                link: '/projects/smart-factory'
              },
              {
                title: 'IoT-Based Monitoring System',
                category: 'IoT',
                image: 'iot-monitoring.jpg',
                link: '/projects/iot-monitoring'
              },
              {
                title: 'Custom ERP Solution',
                category: 'Software',
                image: 'erp-software.jpg',
                link: '/projects/erp-solution'
              },
            ].map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for project image - replace with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center">Project image will go here</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-heading font-bold mb-4">{project.title}</h3>
                  <Link 
                    to={project.link} 
                    className="text-primary font-medium inline-flex items-center group"
                  >
                    View Project
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
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
              Contact us today to discuss how our solutions can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;