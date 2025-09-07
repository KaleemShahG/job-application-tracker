import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-6">
        {/* Left - Copyright */}
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} Job Application Tracker.{" "}
          <span className="hidden sm:inline">Built with React + Tailwind.</span>
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-8 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
