const items = [
  {
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "$500B",
    label: "Total Addressable Market",
    sub: "Global workforce infrastructure",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "$28B",
    label: "Serviceable Market",
    sub: "Global hiring, compliance, and payroll for high-growth companies",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "Our Wedge",
    // label: "Market Entry",
    sub: <>Global talent access for companies that cannot compete on employer brand alone. <strong>The wedge is hiring. The opportunity is workforce infrastructure.</strong></>,
  },
];

export default function MarketOpportunitySection() {
  return (
    <section className="bg-primary py-14" id="market">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((s) => (
            <div key={s.value} className="text-white flex gap-3">
              <div className="mb-3">{s.icon}</div>
              <div>
                <p className="text-3xl font-bold font-mono text-white mb-1">{s.value}</p>
                <p className="text-white font-semibold font-mono text-sm mb-2">{s.label}</p>
                <p className="text-blue-200 text-sm leading-relaxed">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
