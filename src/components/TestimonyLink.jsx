import AvatarsImage from "../assets/images/png/home/avatars.webp";

const TestimonyLink = ({ textColor, className, justifyClassName }) => {
  return (
    <a href={"https://utiva.co/stories"} target="_blank" rel="noopener noreferrer" className="home-testimony-link">
      <div
        className={`flex flex-row justify-start ${
          justifyClassName || "lg:justify-end"
        } ${className} `}
      >
        <div className="">
          <img src={AvatarsImage} className="w-20 lg:w-24" alt="testimonials" />
        </div>

        <div className="font-mono pl-3">
          <p
            className={`${
              textColor || "text-primary"
            } font-semibold text-sm lg:mt-1 flex`}
          >
            Read Testimonials{" "}
            <span className="pl-1">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.85852 1.5287C9.85852 1.09398 9.50611 0.741577 9.0714 0.741577L1.9873 0.741577C1.55259 0.741577 1.20018 1.09398 1.20018 1.5287C1.20018 1.96341 1.55259 2.31582 1.9873 2.31582H8.28428V8.61279C8.28428 9.04751 8.63668 9.39992 9.0714 9.39992C9.50611 9.39992 9.85852 9.04751 9.85852 8.61279L9.85852 1.5287ZM1.65131 10.062L9.62798 2.08528L8.51482 0.972119L0.538147 8.94879L1.65131 10.062Z"
                  fill={textColor === "text-white" ? "#ffffff" : "#050794"}
                />
              </svg>
            </span>
          </p>
          <p className={`${textColor || "text-gray"} text-xs`}>
            Over 20 amazing stories
          </p>
        </div>
      </div>
    </a>
  );
};

export default TestimonyLink;
