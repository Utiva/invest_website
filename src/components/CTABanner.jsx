export default function CTABanner({ onSubscribe }) {
  return (
    <section className="pb-10 pt-10" id="invest">
      <div className="max-w-7xl bg-sky-50 rounded-xl py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-mono font-bold text-primary mb-2">
              Building the Infrastructure Behind Global Hiring
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Global professionals are everywhere. Access isn&apos;t. Utiva is creating the infrastructure
              that enables high-growth companies to discover, hire, manage, and pay exceptional
              professionals from anywhere in the world. We&apos;re raising capital to accelerate this
              mission and power the next generation of global workforce infrastructure.
            </p>
          </div>
          <button
            onClick={onSubscribe}
            className="bg-primary text-white px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm whitespace-nowrap shadow-lg shadow-primary/20 flex-shrink-0"
          >
            Invest With Us
          </button>
        </div>
      </div>
    </section>
  );
}
