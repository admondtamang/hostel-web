import React from "react";
import { FaStar, FaMedal } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div class="pt-32 lg:pt-36 lg:pb-16">
        <div class="px-4">
          <div className="Title-Head pb-4">
            <h1 className="text-[24px] font-semibold pb-4">
              Baneshwor Boys Hostel
            </h1>
            <span className="reviews inline-flex items-center">
              <FaStar /> <p className="pl-2">5.0</p>.
              <p className="underline pl-2">5 reviews</p>
            </span>

            <span className="reviews inline-flex items-center pl-4">
              <FaMedal />.<p className="underline pl-2">Superhost</p>
              <p className="underline pl-2">
                Baneshwor, kathmandu, Nepal
              </p>
            </span>
          </div>
          <div class="Top-Gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="img1 md:col-span-2 row-span-2 hover:brightness-50">
              <img
                className="rounded-[24px]"
                src="/images/blogs/slider/1a.jpeg"
                alt="img"
              />
            </div>
            <div className="img1  hover:brightness-50">
              <img
                className="rounded-[24px]"
                src="/images/blogs/slider/2.webp"
                alt="img"
              />
            </div>
            <div className="img1  hover:brightness-50">
              <img
                className="rounded-[24px]"
                src="/images/blogs/slider/3.jpeg"
                alt="img"
              />
            </div>
            <div className="img1  hover:brightness-50">
              <img
                className="rounded-[24px]"
                src="/images/blogs/slider/1.jpeg"
                alt="img"
              />
            </div>

            <div className="img1  hover:brightness-50">
              <img
                className="rounded-[24px]"
                src="/images/blogs/slider/4.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
