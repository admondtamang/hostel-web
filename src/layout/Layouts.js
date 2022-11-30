import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hotel Website</title>
      </Head>
      <Header />
      <div className="nc-PageHome relative overflow-hidden">
      <div class="absolute inset-x-0 md:top-10 xl:top-40 min-h-0 pl-20 py-24 flex overflow-hidden z-0" data-nc-id="BgGlassmorphism"><span class="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span><span class="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span></div>
        <main className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 mx-auto ">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
