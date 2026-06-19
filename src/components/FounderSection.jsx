export default function FounderSection({ onVideo }) {
  return (
    <section className="py-16" id="about">
      <div className="max-w-7xl bg-primary rounded-2xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4">
              From the Founder
            </p>
            <h2 className="text-3xl lg:text-4xl font-mono font-bold text-white mb-5 leading-tight">
              Watch Our Techstars Pitch
            </h2>
            <p className="text-blue-200 max-w-[490px] text-base leading-relaxed mb-8">
              Hear directly from our founder as he shares the vision behind building the
              infrastructure layer for global hiring and why the future of work belongs to
              companies that can access exceptional people from anywhere.
            </p>
            <button
              onClick={onVideo}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              ▶ Watch the Pitch
            </button>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden cursor-pointer relative group shadow-2xl"
              onClick={onVideo}
            >
              <img
                src="https://img.youtube.com/vi/sm4mhkJq5TE/hqdefault.jpg"
                alt="Utiva Pitch at Techstars"
                className="w-full object-cover"
                onError={(e) => {
                  e.target.src = "https://img.youtube.com/vi/sm4mhkJq5TE/mqdefault.jpg";
                }}
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
