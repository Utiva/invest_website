import { useState } from "react";
import logo from "../assets/utivacolored.svg";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Vision", href: "#vision" },
  { label: "Market Opportunity", href: "#market" },
  { label: "Traction", href: "#traction" },
  { label: "Use of Funds", href: "#funds" },
  { label: "Team", href: "#team" },
];

export default function Navbar({ onSubscribe }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Utiva" className="h-8 w-auto" />
          </a>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray hover:text-primary text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={onSubscribe}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Invest With Us
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-gray"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray hover:text-primary text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
               <button
              onClick={onSubscribe}
              className="mt-3 inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Invest With Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
