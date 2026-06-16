export default function CTABanner({ onSubscribe }) {
  return (
    <section className="pb-10" id="invest">
      <div className="max-w-7xl  bg-sky-50 rounded-xl py-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-primary leading-snug">
              We&apos;re raising to accelerate our mission
              <br />
              <span className="text-2xl font-bold text-primary">and power the next level of growth.</span>
            </p>
          </div>
          <button
            onClick={onSubscribe}
            className="bg-primary text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors text-sm whitespace-nowrap shadow-lg shadow-primary/20"
          >
            Invest With Us
          </button>
        </div>
      </div>
    </section>
  );
}
