import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/logoImg.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 md:px-12 relative z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-xl">Positivus</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#cases">Use Cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <button className="px-6 py-2 border-2 border-black rounded-lg">
            Request a quote
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          open ? "top-full opacity-100" : "-top-[400px] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          <a onClick={() => setOpen(false)} href="#about">About us</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#cases">Use Cases</a>
          <a onClick={() => setOpen(false)} href="#pricing">Pricing</a>
          <a onClick={() => setOpen(false)} href="#blog">Blog</a>
          <button className="mt-2 px-6 py-2 border-2 border-black rounded-lg">
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
