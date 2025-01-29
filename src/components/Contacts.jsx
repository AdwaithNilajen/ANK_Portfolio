import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';

const contactVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const hoverEffect = {
  scale: 1.1,
  transition: { type: 'spring', stiffness: 200 },
};

const arrowHoverEffect = {
  rotate: [0, 20, -20, 0],  // This will make the icon swing back and forth
  scale: 1.2,  // Slightly enlarge the arrow on hover
  transition: { type: 'spring', stiffness: 300 },
};

const Contacts = () => {
  return (
    <div id="contacts" className="border-b border-neutral-900 pb-20 relative">
      {/* Title Animation */}
      <motion.h1
        whileInView="animate"
        initial="initial"
        variants={contactVariants}
        className="my-10 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Information */}
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView="animate"
          initial="initial"
          variants={contactVariants}
          className="my-4 text-lg"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView="animate"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="my-4 text-lg"
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email with hover effect */}
        <motion.a
          whileHover={hoverEffect}
          href={`mailto:${CONTACT.email}`}
          className="block mt-4 text-blue-500 text-lg font-semibold"
        >
          {CONTACT.email}
        </motion.a>
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-1xl tracking-tight text-transparent">
        Frontend Designer | MERN Stack Developer
        </span>
        
        

        {/* Social Media Links with Icon Animation */}
        <div className="flex justify-center mt-6 space-x-8">
          <motion.a
            whileHover={hoverEffect}
            href="https://www.linkedin.com/in/adwaith-nilajen/"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaLinkedin className="text-3xl" />
          </motion.a>

          <motion.a
            whileHover={hoverEffect}
            href="https://github.com/AdwaithNilajen"  
            className="text-gray-600 hover:text-blue-500"
          >
            <FaGithub className="text-3xl" />
          </motion.a>

          <motion.a
            whileHover={hoverEffect}
            href="#"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaInstagram className="text-3xl" />
          </motion.a>

          <motion.a
            whileHover={hoverEffect}
            href="#"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaTwitter className="text-3xl" />
          </motion.a>
        </div>
      </div>

      <div className="relative"> {/* Add this wrapper to the contact section */}
  {/* Up Arrow Button with Animation and Link to Hero Section */}
  <motion.a
  whileHover={{
    scale: 1.2,  // Slightly enlarge the icon on hover
    opacity: 1,  // Make the icon visible when hovered
    transition: { type: 'spring', stiffness: 300 }
  }}
  href="#hero"  // Link to the Hero section
  className="fixed bottom-6 right-6 text-gray-600 opacity-50 hover:text-blue-500 hover:opacity-100"
>
  <FaArrowUp className="text-2xl" />
</motion.a>

</div>
    </div>
  );
};

export default Contacts;
