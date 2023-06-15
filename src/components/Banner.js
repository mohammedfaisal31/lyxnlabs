import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {fadeIn} from "../variants";
import Image from "../assets/avatar.svg";
import {AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram} from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
 
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
              className='mb-6 text-[50px] lg:text-[80px] font-secondary uppercase leading-[1] text-black' >
              <span className='mr-4'>Your Vision </span><br/>
              <TypeAnimation
                sequence={[
                  "Our Expertise",
                  2000,
                  "Our Creativity",
                  2000,
                  "Our Solutions",
                  2000
                ]} 
                speed={50}
                className='text-glory-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn("up",0.8)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='text-black font-bold'
            >
                At LYXN LABS, we wish to pride ourselves on being a leading event management company and a provider of innovative tech products. Our diverse range of services includes designing, developing, and delivering high-quality software solutions and cutting-edge IoT products. 
                </motion.p>
                {/* <motion.ul 
                  variants={fadeIn("up",0.8)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{once:false, amount:0.7}}
                  className='items-center mb-10 mt-10 mx-auto lg:mx-0 '
                >
                <li><b>Event Management Excellence</b> :
                From corporate conferences and trade shows to social gatherings, our dedicated team specializes in meticulous planning and flawless execution. We work closely with our clients to understand their vision and objectives, ensuring that every detail is taken care of to deliver seamless and remarkable events.
                With our expertise, attention to detail, and creativity, we guarantee an extraordinary experience for both you and your attendees.
                </li>
                <li><b>Cutting-Edge Software Solutions </b> :
                Our skilled team of designers and developers leverage the latest technologies to deliver tailored software solutions that meet your unique requirements. From web and mobile applications to custom software development, we strive to transform your ideas into scalable and user-friendly solutions.
                 Our commitment to innovation and cutting-edge technology ensures that your business stays ahead of the curve.</li>
              </motion.ul> */}
            {/* <motion.div 
              variants={fadeIn("up",0.8)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='w-full mt-10 bg-black h-[50px] backdrop-blur-2xl rounded-full
              max-w-[210px] mx-auto px-5 flex justify-between items-center text-2xl '>
              <AiFillInstagram/>
              <AiFillLinkedin/>
              <AiFillGithub/>
            </motion.div> */}

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
          
        </div>
    </div>
  </section>;
};

export default Banner;
