import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span
          className="underline
      underline-offset-4 decoration-1 under font-light"
        >
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 max-w-80 mx-auto">
        Real stories from real customers
      </p>
      
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
            <div key={index} className="max-w-[340px] border 
            shaow-lg rounded px-8 py-12 text-center">
               <img className="w-20 h-20 rounded-full mx-auto mb-4" 
               src={testimonial.image} alt={testimonial.alt} />
               <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
               <p className="text-gray-500 mb-4">{testimonial.role}</p>
               <p className="text-gray-500">{testimonial.text}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
