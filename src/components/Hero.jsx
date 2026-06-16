export default function Hero({ onBooking, onSubscribe }) {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
              Invest in Utiva
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Building the{" "}
              <br />
              <span className="text-primary">Talent Infrastructure</span>
              <br />
              for the World of Work
            </h1>
            <p className="text-gray-500 text-lg mb-6 max-w-[500px] leading-relaxed">
              We help high-growth companies hire, pay, and manage global
              talent—compliantly, quickly, and at scale.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {["Global Talent Access", "Compliant & Localized", "Payroll & Payments"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="https://docs.google.com/presentation/d/16XlqoOVC5nYsFgC9Hr0fWb_CspKjKrP62T25UE-fZoU/export/pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Download</p>
                  <p className="text-sm font-bold text-gray-900 leading-tight">
                    Pitch Deck
                    <span className="ml-1 text-primary group-hover:translate-x-0.5 inline-block transition-transform">→</span>
                  </p>
                </div>
              </a>

              <button
                onClick={onBooking}
                className="flex items-center gap-3 bg-secondary/10 border border-secondary/30 rounded-xl p-4 hover:border-secondary hover:bg-secondary/20 transition-all group text-left"
              >
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  {/* <p className="text-xs text-gray-500">Schedule</p> */}
                  <p className="text-sm  text-gray-900 leading-tight">
                    Book a Time
                    <br />
                    <span className="text-gray-900 font-bold">to Meet</span>
                    <span className="ml-1 text-secondary group-hover:translate-x-0.5 inline-block transition-transform">→</span>
                  </p>
                </div>
              </button>

              <button
                onClick={onSubscribe}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-primary hover:bg-primary/5 transition-all group text-left"
              >
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  {/* <p className="text-xs text-gray-500">Stay Updated</p> */}
                  <p className="text-sm  text-gray-900 leading-tight">
                    Subscribe to
                    <br />
                    <span className="text-primary font-bold">Investor Updates</span>
                    <span className="ml-1 text-primary group-hover:translate-x-0.5 inline-block transition-transform">→</span>
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Right column — Pitch video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                src="https://www.youtube.com/embed/sm4mhkJq5TE?si=q7TwTSKfoxih2uHU"
                title="Utiva Pitch at Techstars"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
