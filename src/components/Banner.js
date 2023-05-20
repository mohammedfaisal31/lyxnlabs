import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {fadeIn} from "../variants";
const Banner = () => {
  return <div className='section' id='home'>
    <div className='container mx-auto'>
        <div>
          <div>
            <div className='mb-6 text-[60px] lg:text-[90px] font-secondary uppercase leading-[1]' >
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
            </div>
            <p>
            Quantum computing is a fascinating field that uses the principles of quantum mechanics to perform computations in a completely different way than traditional computers. In traditional computers, we use bits to store and process information, which can be either a 0 or a 1. But in quantum computers, we use quantum bits, or qubits, which can represent 0, 1, or both at the same time.
            </p>
          </div>
        </div>
    </div>
  </div>;
};

export default Banner;
