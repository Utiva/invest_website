
import AccImage1 from "../assets/images/png/home/accelerate1.webp";
import AccImage2 from "../assets/images/png/home/accelerate2.webp";

import GroupIconImage from "../assets/images/svg/group-icon-white.svg";
import TestimonyLink from "./TestimonyLink";

const CardText = ({ className, title, subTitle }) => {
  return (
    <div
      className={`${
        className || "bg-white"
      } text-default px-8 lg:px-12 py-16 lg:py-6 flex flex-col justify-center`}
    >
      <h2 className="font-mono text-6xl font-semibold">{title}</h2>
      <p className="w-10/12 pt-2">{subTitle}</p>
    </div>
  );
};

const CardImage = ({ image }) => {
  return (
    <div className="">
      <img src={image} alt="Accelerate" />
    </div>
  );
};

const AccelerateSection = ({ url }) => {
  return (
    <section className="pt-20 lg:pt-24 pb-24 lg:pb-28 home-accelerate-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
            <div className="flex flex-wrap justify-between items-end">
              <div className="w-full lg:w-8/12">
                <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl xl:leading-tight font-mono font-semibold">
                  Why companies around the world prefer{" "}
                  <span className="text-gradient">
                    Utiva for expanding their team globally.
                  </span>
                </h2>
              </div>

              <div className="w-10/12 lg:w-4/12 relative mt-6 lg:mt-0 lg:-top-6">
                <TestimonyLink textColor={"text-white"} />
              </div>
            </div>

            <div className=" mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <CardText
                title={"200K+"}
                subTitle="Talent within the Ecosystem"
              />
              <CardImage image={AccImage1} />

              <CardText
                className={"bg-[#03CF74]"}
                title={"350+"}
                subTitle="Backed By Companies in the Global North"
              />
              <CardImage image={AccImage2} />
            </div>

            <div className="mt-6">
              <p className="text-white font-light text-base lg:text-lg">
                We are a platform that helps you expand your team globally.
              </p>
            </div>

            <div className="mt-6 flex">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-link-hover font-mono text-base lg:text-lg flex items-center pr-3"
                >
                  Get Started{" "}
                  <span className="pl-5">
                    <svg
                      className="w-4 h-3"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9144 8.62188C16.3018 8.23447 16.3018 7.60635 15.9144 7.21894L9.60115 0.905697C9.21374 0.518285 8.58562 0.518285 8.19821 0.905697C7.81079 1.29311 7.81079 1.92123 8.19821 2.30864L13.81 7.92041L8.19821 13.5322C7.81079 13.9196 7.81079 14.5477 8.19821 14.9351C8.58562 15.3225 9.21374 15.3225 9.60115 14.9351L15.9144 8.62188ZM0.740723 8.91244L15.2129 8.91244L15.2129 6.92838L0.740723 6.92838L0.740723 8.91244Z"
                        fill="#FBAF1B"
                      />
                    </svg>
                  </span>
                </a>
              ) : (
                <a
                  href={"https://utiva.co"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-link-hover font-mono text-base lg:text-lg flex items-center pr-3"
                >
                  Visit Our Website{" "}
                  <span className="pl-5">
                    <svg
                      className="w-4 h-3"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9144 8.62188C16.3018 8.23447 16.3018 7.60635 15.9144 7.21894L9.60115 0.905697C9.21374 0.518285 8.58562 0.518285 8.19821 0.905697C7.81079 1.29311 7.81079 1.92123 8.19821 2.30864L13.81 7.92041L8.19821 13.5322C7.81079 13.9196 7.81079 14.5477 8.19821 14.9351C8.58562 15.3225 9.21374 15.3225 9.60115 14.9351L15.9144 8.62188ZM0.740723 8.91244L15.2129 8.91244L15.2129 6.92838L0.740723 6.92838L0.740723 8.91244Z"
                        fill="#FBAF1B"
                      />
                    </svg>
                  </span>
                </a>
              )}
            </div>

            <div className="mt-10 w-28">
              <img src={GroupIconImage} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerateSection;
