// components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/CGlogo.png" alt="Genie AI Logo" className="h-20 mr-2" />
        
      </div>

      {/* Center Text */}
      <p className="text-black font-bold text-lg text-center">GENIE AI 2025</p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
          <FaFacebookF />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
          <FaInstagram />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white">
          <FaTwitter />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}
