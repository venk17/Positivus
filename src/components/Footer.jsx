import { Linkedin, Facebook, Twitter } from "lucide-react";
import logoImg from "../assets/logoImg.png"

export default function Footer() {
  return (
    <footer className="bg-white px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Outer container */}
        <div className="bg-[#12131a] text-white rounded-[40px] px-10 md:px-16 py-12">
          {/* Top bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3 text-xl font-semibold">
              <img src={logoImg} alt="logo img " className="invert brightness-0"></img>
              Positivus
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap gap-8 text-sm text-gray-300">
              <a className="hover:text-white" href="#">About us</a>
              <a className="hover:text-white" href="#">Services</a>
              <a className="hover:text-white" href="#">Use Cases</a>
              <a className="hover:text-white" href="#">Pricing</a>
              <a className="hover:text-white" href="#">Blog</a>
            </nav>

            {/* Social icons */}
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-black" />
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <Facebook className="w-4 h-4 text-black" />
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <Twitter className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Middle section */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact */}
            <div className="max-w-sm">
              <span className="inline-block bg-lime-400 text-black text-sm px-3 py-1 rounded-md mb-6">
                Contact us:
              </span>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>
                  Address: 1234 Main St<br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* Subscribe */}
            <div className="bg-[#1b1c24] rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:flex-1 bg-transparent border border-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none"
              />
              <button className="w-full sm:w-auto bg-lime-400 text-black px-6 py-3 rounded-xl text-sm font-medium">
                Subscribe to news
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-10" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="underline hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
