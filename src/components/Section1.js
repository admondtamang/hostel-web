import { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SwiperCarousel from './SwiperCarousel';

const Section1 = () => {
  const swiperData = [
    {
      image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
    },
    {
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
    },
    {
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
    },
    {
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
    },
    {
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
    },
    {
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
    },
  ];

  return (
    <div>
      <div className="SliderSection px-4">
        <div className="SectionSliderNewCategories flow-root">
          <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Heading of sections</h2>
              <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Descriptions for sections
              </span>
            </div>
          </div>
          <SwiperCarousel swiperData={swiperData} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
