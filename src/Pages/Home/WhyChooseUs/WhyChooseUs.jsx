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
    <div>
      <p>Core Features</p>
      <h2>Why Choose Us</h2>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div>
        <div>
          <img src={icon1} alt="" />
          <p>Expert Team</p>
        </div>
        <div>
          <IoMdClock />
          <p>Timely Delivery</p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <p>24/7 Support</p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <p>Best Equipment</p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <p>100% Guranty</p>
        </div>
        <div>
          <img src={icon5} alt="" />
          <p>Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
