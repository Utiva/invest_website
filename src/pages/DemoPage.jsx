import { useState } from "react";
import Navbar from "../components/Navbar";
import SubscribeModal from "../components/SubscribeModal";

export default function DemoPage() {
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBE6] flex flex-col">
      <Navbar onInvest={() => setShowSubscribe(true)} />
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 py-16">
        <div className="w-full max-w-5xl mx-auto">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4 text-center">
            From the Founder
          </p>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-primary text-center leading-snug font-mono font-semibold mb-4">
            Watch Our Techstars Pitch
          </h2>

          <p className="text-gray-900 text-base lg:text-lg mx-auto text-center w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mb-10">
            Hear directly from our founder as he shares the vision behind building the
            infrastructure layer for global hiring and why the future of work belongs to
            companies that can access exceptional people from anywhere.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/sm4mhkJq5TE?autoplay=1&rel=0"
              title="Utiva Pitch at Techstars"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {showSubscribe && <SubscribeModal onClose={() => setShowSubscribe(false)} />}
    </div>
  );
}
