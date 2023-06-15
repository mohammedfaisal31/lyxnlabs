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
    <div className="flex justify-center">
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full max-w-md bg-black  rounded-lg p-6"
      >
        <h2 className="text-2xl text-white text-center mb-4">Get in touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-white mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none bg-white text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Query;
