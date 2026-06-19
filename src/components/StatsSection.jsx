const stats = [
  {
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "$500B TAM",
    subtitle: "Our Total Addressable Market",
    desc: "The global workforce infrastructure market we are building for.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "$28B SMO",
    subtitle: "Our Serviceable Market Opportunity",
    desc: "Global hiring, compliance, and payroll for high-growth companies.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "The Wedge",
    subtitle: "Our Market Entry",
    desc: "Global talent access for companies that cannot compete on employer brand alone. The wedge is hiring; the opportunity is workforce infrastructure.",
  },
];

const Card = ({ icon, title, subtitle, desc }) => {
  return (
    <div className="py-6 px-8 bg-white rounded-lg shadow-sm hire-card h-full">
      <div className="pt-6 pb-5 relative flex justify-start">
        <div className="">{icon}</div>
      </div>
      <h3 className="text-primary font-mono font-semibold text-xl leading-tight">{title}</h3>
      <p className="text-black font-semibold text-base pt-1 pb-4">{subtitle}</p>
      <p className="text-gray-900 font-medium pb-6 text-sm lg:text-base leading-relaxed">{desc}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 w-full lg:w-11/12 xl:w-10/12">
        <div className="relative mx-auto">
          <h4 className="text-base uppercase tracking-widest text-primary font-semibold">
            Our Vision
          </h4>
        </div>
        <p className="w-full lg:w-9/12 xl:w-8/12 mt-4 text-black text-3xl lg:text-4xl xl:text-5xl xl:leading-tight font-mono font-semibold">
          The unified operating system for global workforce management
        </p>

        <div className="py-12 lg:py-14 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12">
          {stats.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} subtitle={s.subtitle} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
