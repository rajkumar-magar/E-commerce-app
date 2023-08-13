import React from "react";
import banner from "../assets/banner.jpg"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover a World of Shopping Delights
            <br className="hidden lg:inline-block" /> Welcome E-commerce
            Extravaganza!
          </h1>
          <p className="mb-8 leading-relaxed">
            Get ready to embark on a journey through a virtual shopping paradise
            like no other. Our E-commerce Website is your gateway to an
            unparalleled shopping experience, right at your fingertips. From
            trendsetting fashion to cutting-edge electronics, from home
            essentials to exquisite gifts, we've curated a collection that
            caters to every desire and whim.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Buy It Now
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More..
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={banner}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
