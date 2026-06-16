import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import TrustSection from "./components/TrustSection";
import FounderSection from "./components/FounderSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import SubscribeModal from "./components/SubscribeModal";
import VideoModal from "./components/VideoModal";

export default function App() {
  const [modal, setModal] = useState(null);

  const close = () => setModal(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero onBooking={() => setModal("booking")} onSubscribe={() => setModal("subscribe")} />
        <StatsSection />
        <TrustSection />
        <FounderSection onVideo={() => setModal("video")} />
        <CTABanner onSubscribe={() => setModal("subscribe")} />
      </main>
      <Footer onSubscribe={() => setModal("subscribe")} />

      {modal === "booking" && <BookingModal onClose={close} />}
      {modal === "subscribe" && <SubscribeModal onClose={close} />}
      {modal === "video" && <VideoModal onClose={close} />}
    </div>
  );
}
