import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <footer className="w-full py-10 flex flex-col items-center gap-4 mt-20">
      <div className="flex flex-wrap justify-center gap-6 px-4 py-4 rounded-2xl backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl">
        <a href="https://www.linkedin.com/in/mohammad-nabil-hanif-469b97303" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-blue-700 transition font-medium">
          <FaLinkedin size={22} /> LinkedIn
        </a>
        <a href="https://github.com/Helion39?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition font-medium">
          <FaGithub size={22} /> GitHub
        </a>
        <a href="https://wa.me/6282246202003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition font-medium">
          <FaWhatsapp size={22} /> WhatsApp
        </a>
        <a href="https://t.me/+6282246202003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition font-medium">
          <FaTelegram size={22} /> Telegram
        </a>
      </div>
      <div className="text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} Mohammad Nabil Hanif. All rights reserved.</div>
    </footer>
  );
};

export default FooterLinks;
