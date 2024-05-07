import React, { useEffect, useState } from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";
import Service from "./Service.jsx";
import { TbPhoneCalling } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-lg font-bold text-purple-600">services</h2>
        <h2 className="text-4xl font-bold mb-4">Our Service Area</h2>
        <p className="mt-2 mb-20">
          the majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service, index) => (
          <Service key={index} service={service}></Service>
        ))}
      </div>
      <button className="btn btn-outline border-1 border-purple-800 mb-20 text-purple-500 font-bold">
        More Services
      </button>

      {/* template section */}
      <div className="bg-black p-20 rounded-xl mb-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex items-center gap-4">
          <div className="text-purple-600 text-6xl">
            <IoCalendarNumberSharp />
          </div>
          <div className="text-white">
            <p>We are open monday-friday</p>
            <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-purple-600 text-6xl">
            <TbPhoneCalling />
          </div>
          <div className="text-white">
            <p>Have a question?</p>
            <p className="text-2xl font-bold">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-purple-600 text-6xl">
            <FaLocationDot />
          </div>
          <div className="text-white">
            <p>Need a repair? our address</p>
            <p className="text-2xl font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
