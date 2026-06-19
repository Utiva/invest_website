import TalentMapImage from "../assets/images/png/home/talent_map.webp";

export default function CTABanner({ onSubscribe }) {
  return (
    <section className="py-20 lg:py-28 bg-sky-50" id="invest">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto">
          <h2 className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-primary text-center leading-snug font-mono font-semibold">
            Building the Infrastructure Behind Global Hiring
          </h2>

          <p className="text-gray-900 mt-4 pb-8 text-base lg:text-lg mx-auto text-center w-full lg:w-10/12 xl:w-9/12">
            Global professionals are everywhere. Access isn&apos;t. Utiva is creating the infrastructure that
            enables high-growth companies to discover, hire, manage, and pay exceptional professionals
            from anywhere in the world. We&apos;re raising capital to accelerate this mission and power the
            next generation of global workforce infrastructure.
          </p>

          <div className="mt-2 mx-auto flex justify-center">
            <button
              onClick={onSubscribe}
              className="bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors text-sm whitespace-nowrap shadow-lg shadow-primary/20"
            >
              Invest With Us
            </button>
          </div>

          <div className="mt-12 md:mt-14 xl:mt-16 w-full lg:w-11/12 xl:w-10/12 mx-auto">
            <img src={TalentMapImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
