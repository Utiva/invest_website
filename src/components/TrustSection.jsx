import halcyon from "../assets/Halcyon-Logo-Stacked-BlackCyan (1).png";
import techstars from "../assets/unnamed (49).png";
import mitSolve from "../assets/unnamed (50).png";
import techNation from "../assets/unnamed (52).png";

const partners = [
  { src: techstars, alt: "Techstars" },
  { src: mitSolve, alt: "MIT Solve" },
  { src: techNation, alt: "Tech Nation Libra 2025" },
  { src: halcyon, alt: "Halcyon" },
];

export default function TrustSection() {
  return (
    <section className="pt-16 lg:pt-20 xl:pt-24 pb-8" id="traction">
      <div className="container mx-auto px-4 w-full lg:w-11/12 xl:w-10/12">
        <p className="text-center text-black font-bold text-xs uppercase tracking-widest mb-10 lg:mb-12">
          Backed by high-growth companies and global partners
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
