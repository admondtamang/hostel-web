import { VscSearch } from "react-icons/vsc";
import Link from "next/link";
import ToggleDarkMode from "./toggleDarkMode";

const Header = () => {
  return (
    <header>
      <div className="Header fixed top-0 w-full left-0 right-0 z-40 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700">
        <div className="nc-MainNav1 relative z-10 2xl:px-16">
          <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center mx-auto">
            <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
              <Link
                className="ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                href="/"
              >
                <b>LeetTel</b>
              </Link>

              <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
                <li className="menu-item menu-dropdown relative menuIsNew_lv1">
                  <Link
                    aria-current="page"
                    className="inline-flex items-center text-sm xl:text-base  py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 !font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100"
                    rel="noopener noreferrer"
                    id="headlessui-popover-button-:r3:"
                    aria-expanded="false"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item menu-megamenu menu-megamenu--large">
                  <Link
                    className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    rel="noopener noreferrer"
                    id="headlessui-popover-button-:r6:"
                    aria-expanded="false"
                    href="/"
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item menu-dropdown relative menuIsNew_lv1">
                  <Link
                    className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    rel="noopener noreferrer"
                    id="headlessui-popover-button-:r9:"
                    aria-expanded="false"
                    href="/"
                  >
                    Contact US
                  </Link>
                </li>
                <li className="menu-item menu-dropdown relative ">
                  <Link
                    className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    href="/blog"
                  >
                    Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <div
                    className="sub-menu nc-will-change-transform absolute transform z-10 w-56 pt-3 left-0 transition ease-in duration-150 opacity-0 translate-y-1"
                    id="headlessui-popover-panel-:rd:"
                    tabindex="-1"
                  ></div>
                </li>
              </ul>
            </div>
            <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
              <div className="HeroSearchForm2Mobile">
                <button className="relative flex items-center w-full border border-neutral-200 dark:border-neutral-6000 px-4 py-2 pr-11 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                  <div className="ml-3 flex-1 text-left overflow-hidden">
                    <span className="block font-medium text-sm">Where to?</span>
                    <span className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 line-clamp-1">
                      Anywhere • Any week • Add guests
                    </span>
                  </div>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-6000 dark:text-neutral-300">
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="block w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
              <div className="hidden xl:flex items-center space-x-0.5">
                <ToggleDarkMode />

                <button className="text-2xl md:text-2xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ">
                  <span className="sr-only">search</span>
                  <VscSearch />
                </button>

                <div className="px-1"></div>
                <Link
                  className="nc-Button relative bg-[#4340CA] h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  b disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                  rel="noopener noreferrer"
                  href="/"
                >
                  Sign up
                </Link>
              </div>
              <div className="flex xl:hidden items-center">
                <button className="text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                  <span className="sr-only">Enable dark mode</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    ></path>
                  </svg>
                </button>
                <div className="px-0.5"></div>
                <button className="text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ">
                  <span className="sr-only">Enable dark mode</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
