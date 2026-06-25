import { useState } from "react";
import Navbar from "../components/Navbar";
import SubscribeModal from "../components/SubscribeModal";

export default function DemoPage() {
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBE6] flex flex-col">
      <Navbar onInvest={() => setShowSubscribe(true)} />
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 py-16">
        <div className="w-full max-w-5xl mx-auto md:pt-10">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4 text-center">
            The Global Workforce Layer
          </p>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-primary text-center leading-snug font-mono font-semibold mb-4">
            WATCH A QUICK DEMO
          </h2>

          <p className="text-gray-900 text-base lg:text-lg mx-auto text-center w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mb-10">
            Utiva is the global workforce operating system that helps companies discover, hire, manage, and pay technical teams from anywhere in the world.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube-nocookie.com/embed/pLXCTyUbqCw?rel=0&modestbranding=1&iv_load_policy=3"
              title="Utiva Platform Walkthrough for Employers and Talent"
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
