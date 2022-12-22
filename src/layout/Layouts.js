import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <div className="dark:bg-neutral-800 dark:text-white">
      <Head>
        <title>Hotel Website</title>
      </Head>
      <Header />
      <main className=" container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 mx-auto ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
