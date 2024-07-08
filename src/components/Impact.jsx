import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const impactRef = useRef();
  const ratingRef = useRef();

  // Animation for impactRef
  useGSAP(() => {
    const firstChild = impactRef.current?.firstChild;
    const lastChild = impactRef.current?.lastChild;

    // Timeline for first and last child animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: impactRef.current,
        start: "bottom bottom",
        end: "bottom 20%",
        scrub: 2,
      },
    });

    timeline
      .to(firstChild, { y: -300, duration: 1, ease: "power1.inOut" })
      .to(firstChild, { opacity: 0, duration: 1, ease: "power1.inOut" })
      .to(lastChild, { x: -150, duration: 5, ease: "power1.inOut" }, "-=1");

    // Pin the last child and make it sticky
    ScrollTrigger.create({
      trigger: impactRef.current,
      start: "top top", // Pin starts when the top of impactRef reaches the top of the viewport
      end: "bottom bottom", // Pin ends when the bottom of impactRef reaches the bottom of the viewport
      pin: lastChild,
      pinSpacing: false,
    });
  });

  // Enhanced staggered animation for ratingRef
  useGSAP(() => {
    gsap.fromTo(
      ".rating-item", // Selector for each rating item
      { x: "100vw", opacity: 0, rotate: -15 }, // Start off-screen to the right, hidden, and slightly rotated
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power1.inOut",
        stagger: {
          amount: 2, // Total duration for all items
          from: "start", // Start stagger from the beginning
          each: 0.5, // Delay between each item's start
          onStart: (i) => console.log(`Animating item ${i}`), // Log each item as it starts
        },
        scrollTrigger: {
          trigger: ratingRef.current,
          start: "top bottom", // Start when ratingRef is at the top
          end: "bottom bottom", // Continue until ratingRef's bottom touches the bottom of the viewport
          scrub: true,
        },
      }
    );

    // Add a ScrollTrigger to make the ratingRef sticky until it ends
    ScrollTrigger.create({
      trigger: ratingRef.current,
      start: "top top", // Start pinning when the top of ratingRef reaches the top of the viewport
      end: "40% top", // End pinning when the bottom of ratingRef reaches the top of the viewport
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <section className="w-full px-24 bg-primary text-secondary">
      <div className="screen-max-width">
        <div
          ref={impactRef}
          className="flex flex-col h-[150vh] justify-center gap-10 text-8xl"
        >
          <p className="font-inter font-medium">Real Products..</p>
          <p className="font-inter font-medium ml-24">Real Impact..</p>
        </div>
        {/* <div className="h-[100vh]">.</div> */}
        <div ref={ratingRef} className="h-[100vh]">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-center rating-item">
              <h1 className="text-9xl font-inter">4.5</h1>
              <p className="text-5xl">App Store</p>
            </div>
            <div className="flex flex-col items-center rating-item">
              <h1 className="text-9xl font-inter">3x</h1>
              <p className="text-5xl">Platform engagement</p>
            </div>
            <div className="flex flex-col items-center rating-item">
              <h1 className="text-9xl font-inter">4.2</h1>
              <p className="text-5xl">Play store</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-around mt-20">
            <div className="flex flex-col items-center rating-item">
              <h1 className="text-9xl font-inter">4.5</h1>
              <p className="text-5xl">App Store</p>
            </div>
            <div className="flex flex-col items-center rating-item">
              <h1 className="text-9xl font-inter">3x</h1>
              <p className="text-5xl">Platform engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
