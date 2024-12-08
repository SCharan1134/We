import { brandingV, experiencesV, productsV } from "../utils";

const Features = () => {
  return (
    <section className="w-full h-full bg-primary text-secondary">
      <div className="screen-max-width h-full">
        <div className="h-full py-16  flex items-center justify-between">
          <img src={experiencesV} className=" h-96 w-2/4 " />
          <div className="font-inter flex flex-col gap-2">
            <p className="font-light ">
              <span className=" font-bold">WE</span> create ( digital )
            </p>
            <p className="font-medium text-7xl">Design</p>
            <div className="flex gap-2 my-4">
              {[
                "Web Design",
                "UI UX Design",
                "User Experience",
                "Product",
                "Immersive Design",
              ].map((text, index) => (
                <div className="text-primary bg-third px-2 py-1" key={index}>
                  {text}
                </div>
              ))}
            </div>
            <p className="font-medium text-lg">
              We specialise in creating branding that resonates and connects.
              Our user experience design is focused on delivering seamless
              interactions, while our interface design marries functionality
              with visual appeal.
            </p>
            <a className="font-medium hover:no-underline underline underline-offset-4 text-lg">
              View Digital Designs{" "}
            </a>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <div className="bg-gray-400 h-96">.</div>
                <p className="text-sm mt-5">Experience</p>
                <p className=" text-xl">Go Audits</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="bg-gray-400 h-96">.</div>
                <p className="text-sm mt-5">Experience</p>
                <p className=" text-xl">Medvarsity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full py-16  flex items-center justify-between">
          <img src={productsV} className=" h-96 w-2/4 " />
          <div className="font-inter flex flex-col gap-2">
            <p className="font-light ">
              <span className=" font-bold">WE</span> make ( digital )
            </p>
            <p className="font-medium text-7xl">Development</p>
            <div className="flex gap-2 my-4">
              {[
                "No Code Development",
                "Web Development",
                "App Development",
                "AR & VR Development",
                "Product Development",
              ].map((text, index) => (
                <div className="text-primary bg-third px-2 py-1" key={index}>
                  {text}
                </div>
              ))}
            </div>
            <p className="font-medium text-lg">
              Our development team excels in delivering a full spectrum of
              digital product creation services, tailored to meet each
              client&apos;s unique needs. We specialise in designing highly
              intuitive and responsive user interfaces, prioritising both
              usability and aesthetic excellence.
            </p>
            <a className="font-medium hover:no-underline underline underline-offset-4 text-lg">
              view digital experiences{" "}
            </a>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <div className="bg-gray-400 h-96">.</div>
                <p className="text-sm mt-5">Experience</p>
                <p className=" text-xl">Go Audits</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="bg-gray-400 h-96">.</div>
                <p className="text-sm mt-5">Experience</p>
                <p className=" text-xl">Medvarsity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full py-16  flex items-center justify-between">
          <img src={brandingV} className=" h-96 w-2/4 " />
          <div className="font-inter flex flex-col gap-2">
            <p className="font-light ">
              <span className=" font-bold">WE</span> create ( digital )
            </p>
            <p className="font-medium text-7xl">Content & Strategy</p>
            <div className="flex gap-2 my-4">
              {[
                "Photography",
                "SEO",
                "Digital Marketing",
                "Social Media Marketing",
                "Brand Designing",
                "Brand Strategy",
              ].map((text, index) => (
                <div className="text-primary bg-third px-2 py-1" key={index}>
                  {text}
                </div>
              ))}
            </div>
            <p className="font-medium text-lg">
              Brands are ideas that keep growing. We think of them like machine
              learning. When you build a brand, you build in the power to adapt
              and evolve. We create the building blocks: the strategy, symbol,
              logotype, typography, color scheme, iconography, illustration
              style, visuals, animations, motion design, photography style,
              sound design, messaging, and tone of voice. But ultimately the
              brand creates itself – in the minds and hearts of the audience.
            </p>
            <a className="font-medium hover:no-underline underline underline-offset-4 text-lg">
              view digital experiences{" "}
            </a>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <div className="bg-gray-400 h-96">.</div>
                <p className="text-sm mt-5">Photography</p>
                <p className=" text-xl">Nadam Band</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="bg-gray-400 h-96">.</div>
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
