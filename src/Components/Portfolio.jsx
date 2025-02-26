import React from "react";

const projects = [
  {
    title: "SaaS Landing Page",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbQUkYmiXb9X251ge5RvRTxKlCmWRagDrnw&s",
    description: "A clean and modern SaaS landing page.",
    link: "#",
    tech: "Figma, Tailwind CSS",
  },
  {
    title: "Crypto Dashboard UI",
    image: "https://cdn.dribbble.com/users/4973619/screenshots/17108409/media/eec4424ac5664bbd93182c5b75bf7dd4.png",
    description: "A futuristic crypto dashboard for traders.",
    link: "#",
    tech: "React, Tailwind CSS",
  },
  {
    title: "E-commerce Store UI",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCzZL0VEPrF-InTWaKvxSJ5X3i-HcrVKBqQ&s",
    description: "A stylish UI for an online fashion store.",
    link: "#",
    tech: "Figma, HTML, CSS",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="mt-2 text-sm text-blue-500">{project.tech}</p>
                <a href={project.link} className="block mt-4 text-blue-600 font-semibold hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
