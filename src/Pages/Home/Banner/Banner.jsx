import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mt-20 ">
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl " />
          <div className="absolute flex items-center h-full rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)]">
            <div className="pl-8 w-1/3 space-y-7 pt-24 text-white">
              <h2 className="text-7xl  font-bold text-wrap">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-4">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-purple-400 border-1 border-purple-400 font-bold text-white mr-6 mb-10">
                  Dicover More
                </button>
                <button className="btn btn-outline border-1 border-purple-600  font-bold text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a
              href="#slide6"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl " />
          <div className="absolute flex items-center h-full rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)]">
            <div className="pl-8 w-1/3 space-y-7 pt-24 text-white">
              <h2 className="text-7xl  font-bold text-wrap">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-4">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-purple-400 border-1 border-purple-400 font-bold text-white mr-6 mb-10">
                  Dicover More
                </button>
                <button className="btn btn-outline border-1 border-purple-600  font-bold text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a
              href="#slide1"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl " />
          <div className="absolute flex items-center h-full rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)]">
            <div className="pl-8 w-1/3 space-y-7 pt-24 text-white">
              <h2 className="text-7xl  font-bold text-wrap">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-4">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-purple-400 border-1 border-purple-400 font-bold text-white mr-6 mb-10">
                  Dicover More
                </button>
                <button className="btn btn-outline border-1 border-purple-600  font-bold text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a
              href="#slide2"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl " />
          <div className="absolute flex items-center h-full rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)]">
            <div className="pl-8 w-1/3 space-y-7 pt-24 text-white">
              <h2 className="text-7xl  font-bold text-wrap">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-4">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-purple-400 border-1 border-purple-400 font-bold text-white mr-6 mb-10">
                  Dicover More
                </button>
                <button className="btn btn-outline border-1 border-purple-600  font-bold text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a
              href="#slide3"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl " />
          <div className="absolute flex items-center h-full rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)]">
            <div className="pl-8 w-1/3 space-y-7 pt-24 text-white">
              <h2 className="text-7xl  font-bold text-wrap">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-4">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-purple-400 border-1 border-purple-400 font-bold text-white mr-6 mb-10">
                  Dicover More
                </button>
                <button className="btn btn-outline border-1 border-purple-600  font-bold text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a
              href="#slide4"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl " />
          <div className="absolute flex items-center h-full rounded-xl left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)]">
            <div className="pl-8 w-1/3 space-y-7 pt-24 text-white">
              <h2 className="text-7xl  font-bold text-wrap">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-4">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-purple-400 border-1 border-purple-400 font-bold text-white mr-6 mb-10">
                  Dicover More
                </button>
                <button className="btn btn-outline border-1 border-purple-600  font-bold text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a
              href="#slide5"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-outline text-white font-black btn-circle border-2 border-purple-600"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
