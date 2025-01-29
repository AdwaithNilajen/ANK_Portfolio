import React from 'react';
import aboutImg from "../assets/about_1removebg.png";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-12">
      <h1 className="my-20 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center">
        {/* About Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8"
        >
          <img
            className="rounded-2xl shadow-lg max-w-xs lg:max-w-md"
            src={aboutImg}
            alt="About"
          />
        </motion.div>
        {/* About Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:pl-8"
        >
          <div className="flex justify-center lg:justify-start">
          <p className="text-center lg:text-left my-6 max-w-xl leading-relaxed text-lg font-light bg-gradient-to-r from-pink-100 via-slate-100 to-purple-500 bg-clip-text text-transparent">
                 {ABOUT_TEXT}
          </p>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
