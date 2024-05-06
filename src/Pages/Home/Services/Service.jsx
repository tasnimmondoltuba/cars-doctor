import React from "react";
import { FaArrowRight } from "react-icons/fa";

const service = ({ service }) => {
  console.log(service);
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Services" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex items-center gap-20 text-purple-600 font-bold mt-5">
            <p>Price: {price}</p>
            <div className="card-actions">
              <button className="">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
