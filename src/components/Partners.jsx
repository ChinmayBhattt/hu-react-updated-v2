import { motion } from 'framer-motion';

// Partner companies data
const partnerCompanies = [
  { 
    id: 1, 
    name: 'Nextease Solutions', 
    logo: '/images/partners/nexteasesolutions.jpg', 
    description: 'Leading software development and IT consulting firm specializing in innovative solutions.',
    website: 'https://www.nexteasesolutions.in'
  },
  { 
    id: 2, 
    name: 'DMV Technologies', 
    logo: '/images/partners/dmetech.jpeg', 
    description: 'Pioneering research and development in emerging technologies and AI solutions.',
    website: 'https://dmetechnologies.com'
  },
];

const Partners = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-primary/80 to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Corporate Partners
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Strategic collaborations that drive innovation and growth in our community
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partnerCompanies.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover="hover"
              className="glass-effect rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div
                className="mb-6 p-4 bg-white/10 rounded-lg w-full flex justify-center items-center h-32 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-full h-full flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 max-w-[80%] object-contain relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent z-0 opacity-50"></div>
                </motion.div>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-accent transition-colors duration-300">
                {partner.name}
              </h3>
              
              <p className="text-gray-300 mb-6 relative z-10">
                {partner.description}
              </p>
              
              <motion.a
                href={partner.website}
                className="btn btn-outline-accent inline-flex items-center space-x-2 group relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Website</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-accent/0 group-hover:border-accent/70 transition-all duration-500 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent/0 group-hover:border-accent/70 transition-all duration-500 rounded-br-lg"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-effect rounded-2xl p-10 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/10 rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Become a Partner
            </h3>
            <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
              Join forces with Hacker's Unity to drive innovation and create meaningful impact in the tech ecosystem.
              We offer tailored partnership opportunities for companies of all sizes.
            </p>
            <motion.a
              href="#"
              className="btn btn-accent inline-flex items-center space-x-2 group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Partner With Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;