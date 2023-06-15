import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';
import { MdElectricalServices } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleIconClick = (link) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
        setActiveLink(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl">
          <Link
            to="home"
            activeClass="active"
            smooth
            spy
            title="Home"
            offset={-200}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text ${
              activeLink === 'home' ? 'text-black' : 'text-white'
            }`}
            onClick={() => handleIconClick('home')}
          >
            <AiOutlineHome className={activeLink === 'home' ? 'text-black' : 'text-white'} />
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth
            spy
            title="About us"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text`}
            onClick={() => handleIconClick('about')}
          >
            <AiOutlineInfoCircle className={activeLink === 'about' ? 'text-black' : 'text-white'} />
          </Link>

          <Link
            to="services"
            activeClass="active"
            smooth
            spy
            title="Services"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text `}
            onClick={() => handleIconClick('services')}
          >
            <MdElectricalServices className={activeLink === 'services' ? 'text-black' : 'text-white'} />
          </Link>

          <Link
            to="query"
            activeClass="active"
            smooth
            spy
            title="Query"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text `}
            onClick={() => handleIconClick('query')}
          >
            <AiOutlineMail className={activeLink === 'query' ? 'text-black' : 'text-white'} />
          </Link>
        {/* 
          <Link
            to="contact"
            activeClass="active"
            smooth
            spy
            title="Contact"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center link-text ${
              activeLink === 'contact' ? 'text-black' : 'text-white'
            }`}
            onClick={() => handleIconClick('contact')}
          >
            <BiPhoneCall />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
