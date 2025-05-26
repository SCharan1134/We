import {
  brandingV,
  experiencesV,
  productsV,
  medvarsityV,
  farmfoodV,
  krishnaV,
  odcV,
  bandV,
} from "../utils";

const Features = () => {
  return (
    <section className="w-full h-full bg-primary text-secondary pr-10">
      <div className="screen-max-width h-full">
        <div className="h-full py-16  flex items-center justify-between ">
          <img src={experiencesV} className=" h-96 w-2/4 " />
          <div className="font-inter flex flex-col gap-1">
            <p className="font-light ">
              <span className=" font-bold">WE</span> create ( digital )
            </p>
            <p className="font-medium text-6xl">Design</p>
            <div className="flex gap-2 my-2">
              {[
                "Web Design",
                "UI UX Design",
                "User Experience",
                "Product",
                "Immersive Design",
              ].map((text, index) => (
                <div
                  className="text-primary text-sm bg-third px-2 py-1"
                  key={index}
                >
                  {text}
                </div>
              ))}
            </div>
            <p className="font-medium text-sm">
              We specialise in creating branding that resonates and connects.
              Our user experience design is focused on delivering seamless
              interactions, while our interface design marries functionality
              with visual appeal.
            </p>
            <a className="font-medium hover:no-underline underline underline-offset-4 text-sm my-2">
              View Digital Designs{" "}
            </a>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <img src={medvarsityV} className="h-auto w-full" />
                <p className="text-sm mt-5">Product Design</p>
                <p className=" text-xl">Medvarsity</p>
              </div>
              <div className="w-full flex flex-col">
                <img src={farmfoodV} className="h-auto w-full" />
                <p className="text-sm mt-5">Brand Design</p>
                <p className=" text-xl">FarmFood</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full py-16  flex items-center justify-between">
          <img src={productsV} className=" h-96 w-2/4 " />
          <div className="font-inter flex flex-col gap-1">
            <p className="font-light ">
              <span className=" font-bold">WE</span> make ( digital )
            </p>
            <p className="font-medium text-6xl">Development</p>
            <div className="flex gap-2 my-2">
              {[
                "No Code Development",
                "Web Development",
                "App Development",
                "AR & VR Development",
                "Product Development",
              ].map((text, index) => (
                <div
                  className="text-primary text-sm bg-third px-2 py-1"
                  key={index}
                >
                  {text}
                </div>
              ))}
            </div>
            <p className="font-medium text-sm">
              Our development team excels in delivering a full spectrum of
              digital product creation services, tailored to meet each
              client&apos;s unique needs. We specialise in designing highly
              intuitive and responsive user interfaces, prioritising both
              usability and aesthetic excellence.
            </p>
            <a className="font-medium hover:no-underline underline underline-offset-4 text-sm my-2">
              view digital experiences{" "}
            </a>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <img src={odcV} className="h-auto w-full" />
                <p className="text-sm mt-5">Application Development</p>
                <p className=" text-xl">ODC</p>
              </div>
              <div className="w-full flex flex-col">
                <img src={medvarsityV} className="h-auto w-full" />
                <p className="text-sm mt-5">Product Development</p>
                <p className=" text-xl">Medvarsity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full py-16  flex items-center justify-between">
          <img src={brandingV} className=" h-96 w-2/4 " />
          <div className="font-inter flex flex-col gap-1  ">
            <p className="font-light ">
              <span className=" font-bold">WE</span> create ( digital )
            </p>
            <p className="font-medium text-6xl">Content & Strategy</p>
            <div className="flex gap-2 my-2">
              {[
                "Photography",
                "SEO",
                "Digital Marketing",
                "Social Media Marketing",
                "Brand Designing",
                "Brand Strategy",
              ].map((text, index) => (
                <div
                  className="text-primary text-sm bg-third px-2 py-1"
                  key={index}
                >
                  {text}
                </div>
              ))}
            </div>
            <p className="font-medium text-sm">
              Brands are ideas that keep growing. We think of them like machine
              learning. When you build a brand, you build in the power to adapt
              and evolve. We create the building blocks: the strategy, symbol,
              logotype, typography, color scheme, iconography, illustration
              style, visuals, animations, motion design, photography style,
              sound design, messaging, and tone of voice. But ultimately the
              brand creates itself – in the minds and hearts of the audience.
            </p>
            <a className="font-medium hover:no-underline underline underline-offset-4 text-sm my-2">
              view digital experiences{" "}
            </a>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <img src={krishnaV} className="h-auto w-full" />
                <p className="text-sm mt-5">Photography</p>
                <p className=" text-xl">Krishnapatnam</p>
              </div>
              <div className="w-full flex flex-col">
                <img src={bandV} className="h-auto w-full" />
                <p className="text-sm mt-5">Photography</p>
                <p className=" text-xl">Band Capricio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
