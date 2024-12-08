import { HeroVideo } from "../utils";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const textListRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    textListRef.current.forEach((item, index) => {
      tl.to(item, {
        y: -150,
        opacity: 0.9, // Fade out
        duration: 0.1, // Duration of the fade out
        ease: "power1.out",
      })
        .to(item, {
          y: 0,
          opacity: 1, // Fade in
          duration: 1, // Duration of the fade in
          ease: "elastic.out(1, 0.3)", // Elastic ease
        })
        .to(
          item,
          {
            y: -150,
            opacity: 0, // Fade out
            duration: 1, // Duration of the fade out
            ease: "elastic.in(1,0.3)",
          },
          `+=${index === textListRef.current.length - 1 ? -3 : 2}`
        );
    });
  }, []);
  return (
    <section className="w-full  nav-height bg-primary relative">
      <div className=" w-full flex-center flex-col">
        <video
          className="pointer-events-none w-[600px]"
          autoPlay
          muted
          loop
          playsInline={true}
          key={HeroVideo}
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <div className="flex-col flex w-full items-center justify-center mt-10">
          <p className="text-2xl font-inter font-medium">
            <span className="font-bold">We</span> make digital (and magical)…
          </p>
          <div className="w-full h-44  border-gray-800 overflow-hidden relative  flex items-center justify-center ">
            <div className="relative w-full h-full text-center">
              {["Products", "Websites", "Brands", "Experiences"].map(
                (text, index) => (
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 text-9xl font-inter font-bold"
                    key={index}
                    ref={(el) => (textListRef.current[index] = el)}
                  >
                    {text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
