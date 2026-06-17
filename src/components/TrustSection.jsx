const metrics = [
  { value: "20,000+", label: "Professionals onboarded" },
  { value: "150+", label: "Companies served" },
  { value: "39+", label: "Countries supported" },
  { value: "96%", label: "Customer retention" },
];

export default function TrustSection() {
  return (
    <section className="pt-10 " id="traction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-100 bg-sky-50 rounded-2xl shadow-sm px-8 py-8">
          <p className="text-center text-primary font-bold text-xs uppercase tracking-widest mb-8">
            Trusted by high-growth companies and global talent
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
              {metrics.map((m) => (
                <div key={m.value}>
                  <p className="text-3xl  lg:text-4xl font-extrabold text-primary mb-1">{m.value}</p>
                  <p className="text-gray-500 text-sm leading-snug">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block w-px self-stretch bg-gray-200 mx-4" />

            {/* Logos */}
            <div className="grid grid-cols-3 gap-x-10 gap-y-5 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS"
                className="h-7 object-contain"
              />
              <span className="text-2xl font-bold text-gray-800 tracking-tight">deel.</span>
              <span className="text-xl font-bold text-gray-800 tracking-tight">ramp <span className="inline-block -rotate-45">↗</span></span>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Techstars_Logo.svg"
                alt="Techstars"
                className="h-6 object-contain"
              />
              <span className="text-sm font-medium text-gray-700 col-span-2 whitespace-nowrap">
                <span className="font-bold" style={{ color: "#4285F4" }}>G</span>
                <span className="font-bold" style={{ color: "#EA4335" }}>o</span>
                <span className="font-bold" style={{ color: "#FBBC05" }}>o</span>
                <span className="font-bold" style={{ color: "#4285F4" }}>g</span>
                <span className="font-bold" style={{ color: "#34A853" }}>l</span>
                <span className="font-bold" style={{ color: "#EA4335" }}>e</span>
                <span className="text-gray-700 font-medium"> for Startups</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
