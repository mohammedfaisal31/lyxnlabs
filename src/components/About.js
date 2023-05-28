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
          <motion.p 
            variants={fadeIn("up",0.8)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
          >
              At Lyxn Labs, our mission is to redefine the event management industry by leveraging innovative technologies to create immersive and unforgettable experiences that captivate audiences.
              We are driven by a set of core values, including creativity, technological excellence, seamless execution, and client satisfaction. These values guide us in every project we undertake
              Say goodbye to manual processes and embrace smart event management solutions. Our innovative technology platform streamlines every aspect of event planning, from registration and ticketing to attendee management and feedback collection. With real-time data insights, analytics, and seamless communication channels, we ensure your event runs smoothly and efficiently.
          </motion.p>
          <motion.div 
            variants={fadeIn("up",0.8)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='items-center mb-10 mt-10 mx-auto lg:mx-0 '>
            <button className='btn btn-lg'>Explore with us</button>
          </motion.div>
          
          </div>
        </div>
    </div>
  </section>
  );
};

export default About;
