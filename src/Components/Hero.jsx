import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-3xl px-6">
        {/* Animated Heading */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Elevate Your Brand with Stunning Web Designs
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          We craft modern, responsive, and engaging websites that bring your ideas to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="space-x-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a href="#portfolio" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
            View Portfolio
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
