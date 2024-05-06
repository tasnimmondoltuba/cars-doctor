import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-screen my-20">
        <div className="hero-content flex-col lg:flex-row gap-28 ">
          <div className="text-center lg:text-left relative">
            <div className="lg:w-1/2">
              <img
                src={person}
                alt=""
                className="shadow-2xl rounded-lg max-w-sm"
              />
              <img
                src={parts}
                alt=""
                className="w-5/6 shadow-2xl rounded-lg max-w-sm absolute left-1/3 top-2/4 border-8 border-white"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-lg text-purple-600 font-bold mb-4">About Us</h2>
            <h2 className="text-4xl font-extrabold mb-8">
              We are qualified & of experience in this field
            </h2>
            <p className="mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <p className="mb-10">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="btn bg-purple-400 font-bold text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
