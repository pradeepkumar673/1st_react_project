import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">PradeepKumar</h1>
          <p className="text-sm text-gray-400">© 24th Dec 2005 All rights reserved.</p>
        </div>

       
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/pradeepkumar673" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/pradeepkumarsurendiran" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/pradeepkumar673atyt/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/@pradeep6736" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;