const priorities = [
  {
    number: "01",
    title: "Employer Growth",
    text: "Expanding employer growth across the US and UK",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag: "US & UK Markets",
  },
  {
    number: "02",
    title: "AI Infrastructure",
    text: "Building our AI-powered payroll and compliance infrastructure",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tag: "Payroll & Compliance",
  },
  {
    number: "03",
    title: "Scaling Operations",
    text: "Scaling product, engineering, and workforce operations",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: "Product & Engineering",
  },
];

export default function UseOfFundsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24" id="funds">
      {/* Decorative top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/15 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              Use of Funds
            </div>
            <h2 className="text-4xl lg:text-5xl font-mono font-bold text-gray-900 leading-tight">
              Accelerating the{" "}
              <span className="relative inline-block">
                Next Stage
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 C 50 2, 150 2, 198 6"
                    stroke="#FBAF1B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              of Growth
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:ml-auto">
              We are investing in three strategic priorities to accelerate our mission and scale globally.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {priorities.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              {/* Ghost number watermark */}
              <span className="absolute -bottom-4 -right-2 font-mono font-bold text-[7rem] leading-none text-gray-100 group-hover:text-primary/5 transition-colors select-none pointer-events-none">
                {item.number}
              </span>

              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-primary/60 bg-primary/8 border border-primary/10 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Number + title */}
              <p className="text-xs font-mono font-bold text-gray-300 mb-1 tracking-widest">
                {item.number}
              </p>
              <h3 className="text-xl font-mono font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {item.text}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
