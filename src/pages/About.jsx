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

const About = () => {
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
              About Yantrikaran
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeIn}
            >
              Leading the future in automation, IoT, software development, and robotics services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-heading font-bold mb-6"
                variants={fadeIn}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-4"
                variants={fadeIn}
              >
                Founded in 2025, Yantrikaran began with a vision to revolutionize how businesses leverage technology for growth and innovation. What started as a small team of passionate engineers has grown into a comprehensive technology solutions provider.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-4"
                variants={fadeIn}
              >
                Our journey has been defined by continuous learning, adaptation, and a commitment to excellence. We've evolved our services to meet the changing needs of industries while maintaining our core values of innovation, quality, and client satisfaction.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="relative w-full h-[270px] rounded-lg overflow-hidden">
                {/* Placeholder for about image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-center text-lg"><img src="/story.png" alt="About Yantrikaran" className="h-full object-cover" /></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Mission & Vision
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="text-4xl text-primary mb-4">🎯</div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technological solutions that drive efficiency, growth, and competitive advantage. We are committed to delivering excellence through our expertise in automation, IoT, software development, and robotics.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="text-4xl text-primary mb-4">🔭</div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a global leader in technological innovation, recognized for transforming industries through our cutting-edge solutions. We envision a future where our technologies enable businesses to operate more efficiently, sustainably, and profitably.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={fadeIn}
            >
              The principles that guide everything we do
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
                icon: '💡',
                title: 'Innovation',
                description: 'We constantly push the boundaries of what\'s possible, embracing new ideas and technologies.',
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description: 'We believe in the power of teamwork, both within our company and with our clients.',
              },
              {
                icon: '✨',
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality in everything we do.',
              },
              {
                icon: '🔄',
                title: 'Adaptability',
                description: 'We embrace change and continuously evolve to meet the needs of a dynamic market.',
              },
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card p-6 text-center hover:border-primary hover:border-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4 mx-auto">{value.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership Team
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={fadeIn}
            >
              Meet the experts behind our success
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
                name: 'Kapil Gangwar',
                position: 'Founder & COO',
                bio: 'With a background in industrial engineering and Good experience in automation, Kapil leads our operations with a focus on efficiency and innovation.',
                image: '/team1.jpg'
              },
              {
                name: 'Ashit Rai',
                position: 'Founder & CEO',
                bio: 'Ashit is a visionary leader with a passion for technology and entrepreneurship, driving the company\'s strategic direction and growth.',
                image: 'team2.jpg'
              },
              {
                name: 'Tarun S',
                position: 'Head of Robotics',
                bio: 'Tarun\'s background in Electronics & Communication engineering and AI has been instrumental in developing our robotics solutions.',
                image: 'team3.jpg'
              },
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card overflow-hidden"
              >
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for team member image - replace with your actual image */}
                  <div className="h-full flex items-center justify-center">
                    <p className="text-center"><img src={member.image} alt={member.name} className="h-full object-cover" /></p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.position}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
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
              Join Our Journey
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              variants={fadeIn}
            >
              Partner with us to bring your technological vision to life.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;