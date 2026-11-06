import { useState } from "react";
import { Leaf, Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative z-50 bg-green-950 px-6 py-4 text-white md:px-8">

      {/* Main Navbar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Leaf className="text-lime-400" size={28} />
          <h1 className="text-xl font-bold">YourBrand</h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition hover:text-lime-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-green-950 transition hover:bg-lime-300 md:flex"
        >
          Get Started <ArrowRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-lime-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-green-950 px-6 py-5 shadow-lg md:hidden">

          <ul className="flex flex-col gap-5 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block transition hover:text-lime-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex w-fit items-center gap-2 rounded-full bg-lime-400 px-5 py-2 font-semibold text-green-950"
          >
            Get Started <ArrowRight size={16} />
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;