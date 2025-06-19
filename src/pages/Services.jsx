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

const Services = () => {
  const services = [
    {
      id: 'automation',
      title: 'Automation Solutions',
      icon: '🤖',
      description: 'Our automation solutions streamline operations, reduce costs, and improve efficiency across various industries.',
      features: [
        'Industrial Automation',
        'Process Automation',
        'Quality Control Systems',
        'Custom Automation Solutions'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced labor costs',
        'Improved product quality',
        'Enhanced workplace safety'
      ],
      image: 'automation.jpg'
    },
    {
      id: 'iot',
      title: 'IoT Solutions',
      icon: '📱',
      description: 'Our IoT solutions connect devices, collect data, and provide actionable insights to optimize your business processes.',
      features: [
        'IoT Device Development',
        'Sensor Networks',
        'Data Collection & Analysis',
        'Remote Monitoring Systems'
      ],
      benefits: [
        'Real-time monitoring and control',
        'Predictive maintenance',
        'Data-driven decision making',
        'Improved resource utilization'
      ],
      image: 'iot.jpg'
    },
    {
      id: 'software',
      title: 'Software Development',
      icon: '💻',
      description: 'We develop custom software solutions tailored to your specific business needs and challenges.',
      features: [
        'Custom Application Development',
        'Web & Mobile Applications',
        'Enterprise Software Solutions',
        'API Development & Integration'
      ],
      benefits: [
        'Tailored to your specific requirements',
        'Scalable and future-proof solutions',
        'Improved business processes',
        'Enhanced user experience'
      ],
      image: 'software.jpg'
    },
    {
      id: 'robotics',
      title: 'Robotics Services',
      icon: '🦾',
      description: 'Our robotics solutions automate complex tasks, enhance precision, and improve productivity in various applications.',
      features: [
        'Industrial Robots',
        'Collaborative Robots (Cobots)',
        'Autonomous Mobile Robots',
        'Custom Robotics Solutions'
      ],
      benefits: [
        'Automation of complex tasks',
        'Increased precision and consistency',
        'Enhanced productivity',
        'Improved workplace safety'
      ],
      image: 'robotics.jpg'
    }
  ];

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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeIn}
            >
              Comprehensive solutions in automation, IoT, software development, and robotics
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="text-primary font-medium inline-flex items-center group"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`section ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <motion.div
                className="order-2 lg:order-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h2 className="text-3xl font-heading font-bold">{service.title}</h2>
                </motion.div>
                <motion.p 
                  className="text-gray-600 mb-6"
                  variants={fadeIn}
                >
                  {service.description}
                </motion.p>
                
                <motion.div variants={fadeIn} className="mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <h3 className="text-xl font-heading font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              
              <motion.div
                className={`relative order-1 ${index % 2 !== 0 ? 'lg:order-first' : 'lg:order-last'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                  {/* Placeholder for service image - replace with your actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center text-lg">Service image will go here</p>
                  </div>
                </div>
                <div className={`absolute -bottom-6 ${index % 2 !== 0 ? '-right-6' : '-left-6'} w-48 h-48 bg-primary/10 rounded-lg`}></div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
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
              Our Process
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={fadeIn}
            >
              How we deliver exceptional results for every project
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Process timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
            
            {[
              {
                title: 'Discovery',
                description: 'We begin by understanding your business, challenges, and objectives to define the scope of the project.',
                icon: '🔍'
              },
              {
                title: 'Planning',
                description: 'Our team develops a comprehensive plan outlining timelines, resources, and deliverables.',
                icon: '📝'
              },
              {
                title: 'Development',
                description: 'We design and develop your solution using the latest technologies and best practices.',
                icon: '⚙️'
              },
              {
                title: 'Testing',
                description: 'Rigorous testing ensures your solution meets the highest standards of quality and performance.',
                icon: '🧪'
              },
              {
                title: 'Deployment',
                description: 'We implement your solution with minimal disruption to your operations.',
                icon: '🚀'
              },
              {
                title: 'Support',
                description: 'Our team provides ongoing support and maintenance to ensure your solution continues to deliver value.',
                icon: '🛠️'
              },
            ].map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`relative z-10 flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                    <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:hidden flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl mr-4">
                    {step.icon}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                    <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2"></div>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              variants={fadeIn}
            >
              Contact us today to discuss how our services can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                Request a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;