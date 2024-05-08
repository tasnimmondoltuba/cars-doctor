import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdClock } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiNutDuotone } from "react-icons/pi";

import icon1 from "../../../assets/icons/group.svg";
import icon2 from "../../../assets/icons/person.svg";
import icon3 from "../../../assets/icons/Wrench.svg";
import icon4 from "../../../assets/icons/check.svg";
import icon5 from "../../../assets/icons/deliveryt.svg";

const WhyChooseUs = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-purple-600 font-bold mb-2">Core Features</p>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="mt-2 mb-20">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="lg:flex items-center justify-around gap-4 ">
        <div className="border-1 border-slate-400 shadow-md p-10 text-center">
          <img src={icon1} alt="" />
          <p>Expert Team</p>
        </div>
        <div className="border-1 border-slate-400 shadow-md p-9 text-center">
          <p className="text-6xl text-[#FF3811]">
            {" "}
            <IoMdClock className="mx-auto" />
          </p>
          <p>Timely Delivery</p>
        </div>
        <div className="border-1 border-slate-400 shadow-md p-10 text-center">
          <img src={icon2} alt="" className="mx-auto" />
          <p>24/7 Support</p>
        </div>
        <div className="border-1 border-slate-400 shadow-md p-10 text-center">
          <img src={icon3} alt="" className="mx-auto" />
          <p>Best Equipment</p>
        </div>
        <div className="border-1 border-slate-400 shadow-md p-10 text-center">
          <img src={icon4} alt="" className="mx-auto" />
          <p>100% Guranty</p>
        </div>
        <div className="border-1 border-slate-400 shadow-md p-10 text-center">
          <img src={icon5} alt="" className="mx-auto" />
          <p>Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
