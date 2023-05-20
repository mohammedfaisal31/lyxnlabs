import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {fadeIn} from "../variants";
import Image from "../assets/avatar.svg";
import {AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram} from "react-icons/ai";
import { motion } from "framer-motion";
 
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12' >
          <div className='flex-1 text-center font-secondary '>
            <motion.div 
              variants={fadeIn("up",0.6)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='mb-6 text-[60px] lg:text-[90px] font-secondary uppercase leading-[1]' >
              <span className='mr-4'>You think | </span>
              <TypeAnimation
                sequence={[
                  "We Design",
                  2000,
                  "We develop",
                  2000,
                  "We deploy",
                  2000
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn("up",0.8)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
            >
                Quantum computing is a fascinating field that uses the principles of quantum mechanics to perform computations in a completely different way than traditional computers. In traditional computers, we use bits to store and process information, which can be either a 0 or a 1. But in quantum computers, we use quantum bits, or qubits, which can represent 0, 1, or both at the same time.
                Quantum computing is a fascinating field that uses the principles of quantum mechanics to perform computations in a completely different way than traditional computers. In traditional computers, we use bits to store and process information, which can be either a 0 or a 1. But in quantum computers, we use quantum bits, or qubits, which can represent 0, 1, or both at the same time.
                  
            </motion.p>
            <motion.div 
              variants={fadeIn("up",0.8)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='items-center mb-10 mt-10 mx-auto lg:mx-0 '>
              <button className='btn btn-lg'>Explore with us</button>
            </motion.div>

            {/* <div className='flex items-center text-[25px] gap-x-6 '>
              <a href="#">
                <AiFillGithub/>
              </a>
              <a href="#">
                <AiFillLinkedin/>
              </a>
              <a href="#">
                <AiFillFacebook/>
              </a>
              <a href="#">
                <AiFillInstagram/>
              </a>
              
            </div> */}
          </div>
          {/* <img src={Image} width={500} height={500} alt={"logo"}/> */}
        </div>
    </div>
  </section>;
};

export default Banner;
