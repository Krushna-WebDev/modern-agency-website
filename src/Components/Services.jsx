import React from "react";
import { Code, PaintBucket, MonitorSmartphone } from "lucide-react";

function Services() {
  return (
    <section className="py-16 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg mb-10">
          We offer high-quality web solutions to elevate your brand.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <Code className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="text-2xl font-semibold mt-4">Web Development</h3>
            <p className="text-gray-600 mt-2">
              Custom-built websites with modern technologies like React & MERN.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <PaintBucket className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="text-2xl font-semibold mt-4">UI/UX Design</h3>
            <p className="text-gray-600 mt-2">
              Beautiful and user-friendly designs for better engagement.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <MonitorSmartphone className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="text-2xl font-semibold mt-4">Responsive Design</h3>
            <p className="text-gray-600 mt-2">
              Optimized for all devices, ensuring a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
