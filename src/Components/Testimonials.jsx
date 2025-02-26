import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This agency provided top-notch service. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Amazing designs and great attention to detail. Loved it!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    feedback: "Professional and responsive team. Great experience!",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-lg italic">"{testimonial.feedback}"</p>
            <h3 className="mt-4 font-semibold text-xl">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
