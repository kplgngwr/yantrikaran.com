import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const Projects = () => {
  // Project categories
  const categories = ['All', 'Automation', 'IoT', 'Software', 'Robotics'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Hybrid Swarm Drones',
      category: 'Automation',
      description: 'Implemented a comprehensive automation solution for a manufacturing plant, resulting in a 35% increase in productivity and 20% reduction in operational costs.',
      image: 'project1.jpg',
      client: 'cuconnect private ltd.',
      year: '2024',
      technologies: [ 'computer vision', 'Industrial IoT', 'Machine Learning'],
      highlights: [
        'Automated production line with real-time monitoring',
        'Predictive maintenance system implementation',
        'Quality control automation with computer vision',
        'Energy optimization systems'
      ]
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              Our Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeIn}
            >
              Explore our portfolio of innovative solutions in automation, IoT, software development, and robotics
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory(category)}
                variants={fadeIn}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
                <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={staggerContainer}
                >
                  {filteredProjects.map((project) => {
                  const imgSrc = project.image
                    ? (project.image.startsWith('http') || project.image.startsWith('//')
                      ? project.image
                      : `/assets/projects/${project.image}`)
                    : `/assets/projects/${project.image}`;

                  return (
                    <motion.div 
                    key={project.id}
                    className="card overflow-hidden group cursor-pointer bg-white rounded-lg shadow"
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                    >
                    <div className="relative h-64 overflow-hidden">
                      <img
                      src={imgSrc}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover block"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `/assets/placeholder-project.jpg`;
                      }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 pointer-events-none"></div>

                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">View Details</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                      <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">{project.category}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{project.client}</span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                    </div>
                    </motion.div>
                  );
                  })}
                </motion.div>
                </AnimatePresence>

                {/* Empty state if no projects match the filter */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">No projects found</h3>
              <p className="text-gray-600">We don't have any {activeCategory.toLowerCase()} projects at the moment.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Project Section */}
      {filteredProjects.length > 0 && (
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
                Featured Project
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                variants={fadeIn}
              >
                A closer look at one of our most impactful solutions
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                  {/* Placeholder for featured project image - replace with your actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center text-lg">Featured project image will go here</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerContainer}>
                <motion.span 
                  className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4"
                  variants={fadeIn}
                >
                  {filteredProjects[0].category}
                </motion.span>
                <motion.h3 
                  className="text-3xl font-heading font-bold mb-4"
                  variants={fadeIn}
                >
                  {filteredProjects[0].title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-6"
                  variants={fadeIn}
                >
                  {filteredProjects[0].description}
                </motion.p>
                
                <motion.div variants={fadeIn} className="mb-6">
                  <h4 className="text-xl font-heading font-semibold mb-3">Client</h4>
                  <p className="text-gray-600">{filteredProjects[0].client}</p>
                </motion.div>
                
                <motion.div variants={fadeIn} className="mb-6">
                  <h4 className="text-xl font-heading font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredProjects[0].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <h4 className="text-xl font-heading font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {filteredProjects[0].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

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
              Have a Project in Mind?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              variants={fadeIn}
            >
              Let's discuss how we can help you achieve your goals with our expertise in automation, IoT, software development, and robotics.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;