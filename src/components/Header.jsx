import { Menu } from 'lucide-react';
import logoImg from "../assets/logoImg.png"

function Header() {
  return (
    <header className="bg-white py-4 px-6 md:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src={logoImg} alt='logo img'></img>
            </div>
            <span className="font-bold text-xl">Positivus</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-900 hover:text-gray-600">About us</a>
          <a href="#services" className="text-gray-900 hover:text-gray-600">Services</a>
          <a href="#cases" className="text-gray-900 hover:text-gray-600">Use Cases</a>
          <a href="#pricing" className="text-gray-900 hover:text-gray-600">Pricing</a>
          <a href="#blog" className="text-gray-900 hover:text-gray-600">Blog</a>
          <button className="px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-50">
            Request a quote
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
