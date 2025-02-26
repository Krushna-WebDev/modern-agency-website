import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">
          Feel free to reach out for collaborations or just a friendly hello! 👋
        </p>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input 
                type="text" 
                className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input 
                type="email" 
                className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea 
                rows="4"
                className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-gray-700">Or connect with me on:</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-500 hover:text-blue-700 text-2xl font-semibold">
              🌐 LinkedIn
            </a>
            <a href="mailto:krushna.webdev01@gmail.com" className="text-gray-900 hover:text-gray-700 text-2xl font-semibold">
              📩 Email
            </a>
            <a href="#" className="text-black hover:text-gray-700 text-2xl font-semibold">
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
