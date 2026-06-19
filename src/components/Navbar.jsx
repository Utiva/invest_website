import { useEffect, useState } from "react";
import logo from "../assets/utivacolored.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Utiva" className="h-9 w-auto" />
          </a>

          <a
            href="#invest"
            className="bg-primary text-white px-7 py-3 rounded-lg text-base font-semibold hover:bg-primary-dark transition-colors"
          >
            Invest With Us
          </a>
        </div>
      </div>
    </nav>
  );
}
