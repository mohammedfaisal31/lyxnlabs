import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="query">
      <div className="container mx-auto">
        <div className="gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="text-center font-secondary mx-auto">
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[60px] lg:text-[90px] font-secondary uppercase leading-[1] text-black"
            >
              <span className="mr-4">Query</span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="w-full container mx-auto p-4 border border-white rounded-lg card flex justify-center"
            >
              
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-white font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={handleChange}
                      required
                      className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                      required
                      className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-white font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full text-black px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-black py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </form>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="items-center mb-10 mt-10 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Explore with us</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;
