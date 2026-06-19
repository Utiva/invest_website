import techstars from "../assets/unnamed (49).png";
import mitSolve from "../assets/unnamed (50).png";
import techNation from "../assets/unnamed (52).png";
import halcyon from "../assets/Halcyon-Logo-Stacked-BlackCyan (1).png";

const metrics = [
  { value: "20,000+", label: "Professionals onboarded" },
  { value: "150+", label: "Companies served" },
  { value: "39+", label: "Countries supported" },
  { value: "96%", label: "Customer retention" },
];

const partners = [
  { src: techstars, alt: "Techstars" },
  { src: mitSolve, alt: "MIT Solve" },
  { src: techNation, alt: "Tech Nation Libra 2025" },
  { src: halcyon, alt: "Halcyon" },
];

export default function TrustSection() {
  return (
    <section className="pt-10" id="traction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-100 bg-sky-50 rounded-2xl shadow-sm px-8 py-8">
          <p className="text-center text-primary font-bold text-xs uppercase tracking-widest mb-8">
            Trusted by High-Growth Companies
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
              {metrics.map((m) => (
                <div key={m.value}>
                  <p className="text-3xl lg:text-4xl font-extrabold text-primary mb-1">{m.value}</p>
                  <p className="text-gray-500 text-sm leading-snug">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block w-px self-stretch bg-gray-200 mx-2" />

            {/* Logos */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 items-center">
              {partners.map((p) => (
                <img
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  className="h-[70px] w-auto object-contain"
                />
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs mt-8 leading-relaxed">
            Backed and supported by an ecosystem including Techstars, Google, Meta, Halcyon, Global Good Fund, and leading workforce operators.
          </p>
        </div>
      </div>
    </section>
  );
}
