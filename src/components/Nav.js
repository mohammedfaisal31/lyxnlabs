import React from 'react';
import {Link} from "react-scroll";
import { AiOutlineHome ,AiOutlineInfoCircle,AiOutlineMail} from "react-icons/ai";
import { MdElectricalServices} from "react-icons/md";
import { BiPhoneCall} from "react-icons/bi";



const Nav = () => {
  return (
          <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
              <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full 
                              max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl '> 
                      <Link to='home' activeClass='active' smooth  spy title="Home" offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text'><AiOutlineHome/></Link>    
                      <Link to='about' activeClass='active' smooth spy title="About us" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text'><AiOutlineInfoCircle/></Link>
                      <Link to='services' activeClass='active' smooth spy title="Services" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text'><MdElectricalServices/> </Link>
                      <Link to='contact' activeClass='active' smooth spy title="Contact" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text' ><BiPhoneCall/> </Link>
                      <Link to='query' activeClass='active' smooth spy title="Drop us a message" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text'><AiOutlineMail/> </Link>
                      
              </div>
            </div>
          </nav>
        )
};

export default Nav;
