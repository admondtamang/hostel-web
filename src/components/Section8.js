import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SwiperCarousel from './SwiperCarousel';
import Place from './product/place';

const Section8 = () => {
  const swiperData = [
    {
      image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      name: 'Singapore',
      caption: '188,288 properties',
      // properties,
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
      <div className="SliderSection px-4 py-8">
        <div className="SectionSliderNewCategories flow-root">
          <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Explore by types of stays</h2>
              <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Descriptions for sections
              </span>
            </div>
            <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
              <div className="NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 " data-id="NextPrev">
                <button
                  className="w-10 h-10 mr-[6px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  title="Prev"
                  data-glide-dir="<"
                >
                  <i className="las la-angle-left"></i>
                </button>
                <button
                  className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  title="Next"
                  data-glide-dir=">"
                >
                  <i className="las la-angle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <SwiperCarousel swiperData={swiperData} PlaceComponent />
        </div>
      </div>
    </div>
  );
};

export default Section8;
