import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='about'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12' >
          <div className='flex-1 text-center font-secondary '>
            <motion.div 
              variants={fadeIn("up",0.6)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='mb-6 text-[60px] lg:text-[90px] font-secondary uppercase leading-[1]' >
              <span className='mr-4'>About us</span>
            </motion.div>
          </div>
          <div className='flex-1 text-center font-secondary '>
            
          </div>
          
        </div>
    </div>
  </section>
  );
};

export default About;
