import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Services = () => {
  return (<section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='services'>
  <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12' >
        <div className='flex-1 text-center font-secondary '>
          <motion.div 
            variants={fadeIn("up",0.05)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='mb-6 text-[60px] lg:text-[90px] font-secondary uppercase leading-[1] text-black' >
            <span className='mr-4'>Services</span>
            
          </motion.div>
          {/* Subscription Plan Cards */}
      <div className='flex flex-wrap justify-center gap-4'>
        {/* Card 1 */}
        <motion.div 
            variants={fadeIn("up",0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
             className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-white rounded-lg card'>
          Event Planning and Management
        </motion.div>
        <motion.div 
            variants={fadeIn("up",0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
             className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-white rounded-lg card'>
          Event Planning and Management
        </motion.div>
        <motion.div 
            variants={fadeIn("up",0.9)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
             className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-white rounded-lg card'>
          Event Planning and Management
        </motion.div>
       
      </div>
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
</section>);
};

export default Services;
