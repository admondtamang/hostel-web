import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Section8 = () => {
  return (
    <div>
      <div className="SliderSection px-4 py-8">
        <div className="SectionSliderNewCategories flow-root">
          <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
              Explore by types of stays
              </h2>
              <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Descriptions for sections
              </span>
            </div>
            <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
              <div
                className="NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 "
                data-id="NextPrev"
              >
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

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 6,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4 relative ">
                <img src="/images/explore/pokhara.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Pokhara
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4">
              <img src="/images/explore/kathmandu.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Kathmandu
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4">
              <img src="/images/explore/sauraha.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Sauraha
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4">
              <img src="/images/explore/nagarkot.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Nagarkot
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4">
              <img src="/images/explore/bhaktapur.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Bhaktapur
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4">
              <img src="/images/explore/chitwan.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Chitwan
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-2xl flex-shrink-0 aspect-w-5 aspect-h-4">
              <img src="/images/explore/bandipur.webp"/>
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
              <div class="mt-4 truncate">
                <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  Bandipur
                </h2>
                <span class="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section8;
