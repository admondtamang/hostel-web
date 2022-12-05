import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Tab } from '@headlessui/react';
import { MdStar } from 'react-icons/md';
import Link from 'next/link';

const swiperCarousel = [
  {
    id: 1,
    Feature: 'Single Room - 3 beds',
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.9,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'girls hostel',
    Location: 'New Baneshwor',
    Price: '$36',
    Rating: 4.9,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
  {
    Feature: 'Single Room - 3 beds',
    id: 1,
    Name: 'boys hostel',
    Location: 'kathmandu',
    Price: '$26',
    Rating: 4.8,
  },
];

const HostelHome = () => {
  return (
    <div className="pt-14">
      <Swiper modules={[Pagination, EffectFade]} pagination effect speed={800} slidesPerView={1} className="mycardsswiper" loop></Swiper>
      <div>
        <div className="SectionSliderNewCategories px-12 py-8 mx-4 my-8">
          <div className="SectionSliderNewCategories__PageHome_s1nc__rq_ flow-root glide--ltr glide--slider glide--swipeable">
            <div className="Section-Heading  flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-semibold">Boys Hostel</h2>
                <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                  Popular places to stay that Chisfis recommends for you
                </span>
              </div>
              <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
                <div
                  className="NextPrev  flex items-center text-neutral-900 dark:text-neutral-300 "
                  data-id="NextPrev"
                  data-glide-el="controls"
                ></div>
              </div>
            </div>

            <div className="Tabs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {swiperCarousel.map((row, index) => (
                  <Link href="/hostel/hostel-details" key={index}>
                    <div className="cards rounded-[24px] shadow-sm bg-white hover:shadow-xl hover:bg-[#F3F1F0]">
                      <Swiper
                        modules={[Pagination, EffectFade]}
                        pagination
                        effect
                        speed={800}
                        slidesPerView={1}
                        className="mycardsswiper"
                        loop
                      >
                        <SwiperSlide>
                          <img className="rounded-t-[24px]" src="/images/blogs/1.jpeg"></img>
                        </SwiperSlide>

                        <SwiperSlide>
                          <img className="rounded-t-[24px]" src="/images/blogs/2.png"></img>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img className="rounded-t-[24px]" src="/images/blogs/3.png"></img>
                        </SwiperSlide>
                      </Swiper>
                      <div className="lower-content">
                        <div className="p-4 space-y-4">
                          <div className="space-y-2">
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">{row.Feature}</span>
                            <div className="flex items-center space-x-2">
                              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-green-800 bg-green-100">
                                ADS
                              </span>
                              <h2 className=" font-medium capitalize text-lg">
                                <span className="line-clamp-1">{row.Name}</span>
                              </h2>
                            </div>
                            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                              </svg>
                              <span className="">{row.Location}</span>
                            </div>
                          </div>
                          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
                          <div className="flex justify-between items-center">
                            <span className="text-base font-semibold">
                              {row.Price}
                              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">/night</span>
                            </span>
                            <div className="flex items-center space-x-1 text-sm">
                              <div className="pb-[2px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="w-[18px] h-[18px] text-orange-500"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <span className="font-medium ">{row.Rating}</span>
                              <span className="text-neutral-500 dark:text-neutral-400">(28)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelHome;
