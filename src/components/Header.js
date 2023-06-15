import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import {AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram} from "react-icons/ai";

const Header = () => {
  return(
    <header className='py-8 ml-200'>
      <div className='container mx-auto'>
        <div className='flex justify-between '>
          <a href="/">
            <motion.h1
              variants={fadeIn("up",0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='text-[35px] semi-bold text-black font-bold'
            >
                LYXN LABS
            </motion.h1>
          </a>
          <motion.div
              variants={fadeIn("up",0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='flex items-center space-x-5'>
            <a href="https://instagram.com/lyxnlabs_093?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" rel="noopener noreferrer"><AiFillInstagram className='text-3xl text-black hover:shadow-lg bg-{#f1f0f0}' /></a>
            <a href="https://www.linkedin.com/company/lyxn-labs/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='text-3xl text-black hover:shadow-lg' /></a>
            <AiFillGithub className='text-3xl text-black hover:shadow-lg' />
          </motion.div>
        </div>
      </div>
    </header>
  ) 
};

export default Header;
