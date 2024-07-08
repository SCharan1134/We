const Features = () => {
  return (
    <section className="w-full bg-primary text-secondary">
      <div className="screen-max-width">
        <div className="h-[100vh] py-24  flex items-center justify-between">
          <img
            src="https://s3-alpha-sig.figma.com/img/fc50/54ee/b93b1960689b655d9372c430a2d06f41?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MrR6rvJUQP2gscqFB2DulfLRwogCRu0vFZTyGPBUI9ctIZGRe2Ohe28sgPeoIQ39~w~yzGBayB7fLKPkXpCFtfQ6vpcWy9Jr5ma3HovG5D7x0O5abiSNpqTPjsBbD23TYA3UG13irZWWmVeGQAhZjBhV-CDx~ostL~DpWql0CudbQ0bHbcz8pTtET967b9B-DDnXAiGFx7CtOucX~AuJGqfEQq9ozGozeUC4xOqW45Amj~PCwn-xYPPdsH5P7hxCJBuOQjIE46BXUstCeIoUjzVlm~XtsJnI5EfDfHYy1UY3R5i4-V-tDme2-W9xSRRC5MwYImZ3TFErOnArBHYh9g__"
            className=" h-96 w-2/4 "
          />
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
        <div className="h-[100vh] py-24  flex items-center justify-between">
          <img
            src="https://s3-alpha-sig.figma.com/img/f0de/42e4/888170d1878ab284b97383662e8e9566?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZJKRmQ3zpZbNlUX36EhPebIdN2NCr6AUPlnd9N1-25L0awhbMg7~iK3SyC45Be8OdJck8WWHzAe9hENCw2eF0DkbN0sC2SBb-T1tbyfVynQvNdULfiwjZAuKL4p-CXxDf6v1GECI6XGAHTi-CJECXUlEantCwtY~z5iHhIkpmN~q2b5i7THl2Eu9HfaU7iQ9D7e8lS0rEhoqjakwkIFZXk9PW40JmnjXKMeBsqURCwzy6xpcro-IJQfDkOUufyu0fbiktlDI0Af6ZROm~LUc~8xjVU9nsnZp17Ws1pdJUmTyRU9I4UsLnWIOFbXB7WzgE7PO1GCjZ2STe21KNDYCg__"
            className=" h-96 w-2/4 "
          />
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
        <div className="h-[100vh] py-24  flex items-center justify-between">
          <img
            src="https://s3-alpha-sig.figma.com/img/fc50/54ee/b93b1960689b655d9372c430a2d06f41?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MrR6rvJUQP2gscqFB2DulfLRwogCRu0vFZTyGPBUI9ctIZGRe2Ohe28sgPeoIQ39~w~yzGBayB7fLKPkXpCFtfQ6vpcWy9Jr5ma3HovG5D7x0O5abiSNpqTPjsBbD23TYA3UG13irZWWmVeGQAhZjBhV-CDx~ostL~DpWql0CudbQ0bHbcz8pTtET967b9B-DDnXAiGFx7CtOucX~AuJGqfEQq9ozGozeUC4xOqW45Amj~PCwn-xYPPdsH5P7hxCJBuOQjIE46BXUstCeIoUjzVlm~XtsJnI5EfDfHYy1UY3R5i4-V-tDme2-W9xSRRC5MwYImZ3TFErOnArBHYh9g__"
            className=" h-96 w-2/4 "
          />
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
