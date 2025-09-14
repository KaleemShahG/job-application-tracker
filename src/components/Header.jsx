import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">Job Tracker</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Dashboard</Link>
          <Link to="/add" className="hover:text-yellow-300 transition">Add Job</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-blue-700 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-4">
          <Link
            to="/"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/add"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Add Job
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
