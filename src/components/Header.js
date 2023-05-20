import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
const Header = () => {
  return(
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="/">
            <motion.h1
              variants={fadeIn("up",0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='text-[35px] semi-bold'
            >
                LYXN LABS
            </motion.h1>
          </a>
          <motion.button 
            variants={fadeIn("up",0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='btn btn-sm '>
            Contact us
          </motion.button>
        </div>
      </div>
    </header>
  ) 
};

export default Header;
