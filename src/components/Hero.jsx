import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/portfolio_img.jpg';
import { motion } from 'framer-motion';

const containerVariant = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className=" pb-8 lg:mb-35">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
           <motion.h1
  variants={containerVariant(0)}
  initial="hidden"
  animate="visible"
  className="pb-8  text-5xl font-extrabold tracking-wide  bg-clip-text bg-gradient-to-r text-white from-blue-400 to-purple-600 lg:mt-16 lg:text-8xl"
>
  Adwaith Nilajen
</motion.h1>             

            <motion.span
              variants={containerVariant(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={containerVariant(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-lg py-4 text-lg font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Profile Picture"
              className="w-90 h-90 rounded-full object-cover shadow-lg"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;