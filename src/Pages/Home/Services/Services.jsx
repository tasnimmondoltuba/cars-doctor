import React, { useEffect, useState } from "react";

import Service from "./Service.jsx";

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
    </div>
  );
};

export default Services;
