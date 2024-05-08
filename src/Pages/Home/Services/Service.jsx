import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const service = ({ service }) => {
  console.log(service);
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-96 h-[400px] bg-base-100 shadow-xl mb-10">
        <figure className="px-10 pt-10">
          <img src={img} alt="Services" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex items-center gap-20 text-purple-600 font-bold mt-5">
            <p>Price: {price}</p>
            <div className="card-actions">
              <Link to={`/checkout/${_id}`}>
                <button className="">
                  <div className="flex items-center justify-center gap-4">
                    <p>Book Now</p>
                    <p>
                      <FaArrowRight />
                    </p>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
