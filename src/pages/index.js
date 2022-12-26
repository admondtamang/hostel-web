import Layouts from "../layout/Layouts";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";

export default function Home() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Layouts>
      <Hero />
      <Section1 variants={cardVariants} />
      <Section2 variants={cardVariants} />
      <Section3 variants={cardVariants} />
      <Section4 variants={cardVariants} />
      <Section5 variants={cardVariants} />
      <Section6 variants={cardVariants} />
      <Section7 variants={cardVariants} />
      <Section8 variants={cardVariants} />
      <Section9 variants={cardVariants} />
    </Layouts>
  );
}
