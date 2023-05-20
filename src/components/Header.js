import React from 'react';

const Header = () => {
  return(
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="/">
            <img alt="logo"/>
          </a>
          <button className='btn btn-sm '>Get into business</button>
        </div>
      </div>
    </header>
  ) 
};

export default Header;
