import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { animated, useSpring, config } from "@react-spring/web";
import HeroImage1 from "../../assets/images/hero-image-1.png";
import HeroImage2 from "../../assets/images/hero-image-2.png";
import HeroImage3 from "../../assets/images/hero-image-3.png";

const images = [HeroImage1, HeroImage2, HeroImage3];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  });

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Automatically advance to the next image every 3 seconds
    const interval = setInterval(nextImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen font-grotesk bg-hero bg-no-repeat bg-cover pt-20">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-8 mt-10">
        <div className="w-full h-full">
          <p className="text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-6xl 2xl:leading-[80px] w-full">
            <span className="text-primary">
              <Typewriter
                words={["Streamline", "Optimize", "Simplify"]}
                typeSpeed={150}
                deleteSpeed={120}
                delaySpeed={1000}
                loop={0}
              />
              <Cursor cursorBlinking={true} />
            </span>{" "}
            your
            <br />
            business payments
          </p>
          <p className="pt-4 pb-[56px] text-secondary-300 text-base">
            Redpay empowers businesses in Africa to effortlessly manage payments, ensuring you get paid securely from across the globe.
          </p>
          <div>
            <Button
              className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-primary rounded text-secondary-200 hover:bg-opacity-80"
            >
              Create an account
            </Button>
            <Button
              className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-transparent text-primary hover:text-opacity-70 hover:bg-transparent hover:shadow-none"
            >
              Contact Sales
            </Button>
          </div>
        </div>
        <div className="w-full h-full bg-heroRight bg-no-repeat bg-contain p-5">
          <animated.div style={props} className="max-w-full">
            <img src={images[index]} alt="hero-image" />
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
