import React from "react";

const hostel = [
  {
    id: 1,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },

  {
    id: 2,
    Name: "Holiday Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel2.jpg",
  },

  {
    id: 3,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },

  {
    id: 4,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },
  {
    id: 4,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },
  {
    id: 4,
    Name: "Flock Hostel",
    Location: "Kathmandu",
    Rating: 4.9,
    Photo: "images/hostel.jpg",
  },
];

const Section7 = () => {
  return (
    <div className="customer-info px-4">
      <div class="relative py-16">
        <div class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 z-0 bg-white dark:bg-black dark:bg-opacity-20 "></div>
        <div class="relative">
          <div class="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div class="text-center w-full max-w-2xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-semibold">
                Explore Nearby Hostels
              </h2>
              <span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Discover great places near where you live
              </span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {hostel.map((row) => (
              <div
                class="relative flex items-center p-3 sm:p-6 hover:shadow-xl hover:bg-[#F3F1F0] border-[1px] border-[#eaeaea] rounded-[24px]"
                href="/"
              >
                <span class="inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute right-2 top-2 text-gray-800 bg-gray-100">
                  {row.Rating}
                </span>
                <div class="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
                  <div class="absolute inset-0">
                    <img
                      src={row.Photo}
                      class="object-cover w-full h-full"
                      alt="imgs"
                    />
                  </div>
                </div>
                <div class="ml-4 flex-grow overflow-hidden">
                  <h2 class="text-base font-medium">
                    <span class="line-clamp-1">{row.Name}</span>
                  </h2>
                  <span class="block mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    {row.Location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
