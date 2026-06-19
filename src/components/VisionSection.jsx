const pillars = [
  {
    label: "Talent Access",
    desc: "20,000+ vetted professionals across 39 countries",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Compliant Hiring",
    desc: "End-to-end hiring operations in 120+ countries",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Global Payroll",
    desc: "Compliant payroll and workforce payments at scale",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24" id="vision">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
            Our Vision
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center text-4xl lg:text-6xl font-mono font-bold text-white leading-[1.08] tracking-tight mb-8 max-w-4xl mx-auto">
          The Operating System{" "}
          <br className="hidden sm:block" />
          for{" "}
          <span className="relative inline-block">
            <span className="text-secondary">Global Work</span>
            {/* Underline accent */}
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 C 60 2, 240 2, 298 6"
                stroke="#FBAF1B"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
        </h2>

        {/* Body */}
        <p className="text-center text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          We believe every company should be able to hire the best people in the
          world, regardless of geography or employer brand.{" "}
          <br className="hidden sm:block" />
          Utiva unifies talent access, compliant hiring, and global payroll into
          one intelligent operating system.
        </p>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-7 hover:bg-white/10 hover:border-secondary/40 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-white/10 font-mono font-bold text-5xl leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center text-secondary mb-4">
                {p.icon}
              </div>
              <p className="text-white font-semibold text-base mb-1">{p.label}</p>
              <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
