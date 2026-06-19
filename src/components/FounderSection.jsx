export default function FounderSection({ onVideo }) {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBE6]" id="about">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4 text-center">
            From the Founder
          </p>

          <h2 className="w-full mx-auto text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-primary text-center leading-snug font-mono font-semibold">
            Watch Our Techstars Pitch
          </h2>

          <p className="text-gray-900 mt-4 pb-8 text-base lg:text-lg mx-auto text-center w-full md:w-10/12 lg:w-9/12 xl:w-8/12">
            Hear directly from our founder as he shares the vision behind building the
            infrastructure layer for global hiring and why the future of work belongs to
            companies that can access exceptional people from anywhere.
          </p>

          <div className="mt-6 md:mt-8 xl:mt-10 max-w-5xl mx-auto">
            <div
              className="rounded-2xl h-[35rem] overflow-hidden cursor-pointer relative group shadow-2xl"
              onClick={onVideo}
            >
              <img
                src="https://img.youtube.com/vi/sm4mhkJq5TE/hqdefault.jpg"
                alt="Utiva Pitch at Techstars"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://img.youtube.com/vi/sm4mhkJq5TE/mqdefault.jpg";
                }}
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
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
