import { useState } from "react";
import AccelerateSection from "../components/AccelerateSection";
import BookingModal from "../components/BookingModal";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import FounderSection from "../components/FounderSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import SubscribeModal from "../components/SubscribeModal";
import TrustSection from "../components/TrustSection";
import VideoModal from "../components/VideoModal";

export default function HomePage() {
  const [modal, setModal] = useState(null);
  const close = () => setModal(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onInvest={() => setModal("subscribe")} />
      <main className="flex-1">
        <Hero
          onBooking={() => setModal("booking")}
          onSubscribe={() => setModal("subscribe")}
          onVideo={() => setModal("video")}
        />
        <TrustSection />
        <StatsSection />
        <FounderSection onVideo={() => setModal("video")} />
        <CTABanner onSubscribe={() => setModal("subscribe")} />
        <AccelerateSection />
      </main>
      <Footer onSubscribe={() => setModal("subscribe")} />

      {modal === "booking" && <BookingModal onClose={close} />}
      {modal === "subscribe" && <SubscribeModal onClose={close} />}
      {modal === "video" && <VideoModal onClose={close} />}
    </div>
  );
}
