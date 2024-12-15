import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-gray-600 max-w-[1000px] mx-auto">
      <nav className="container mx-auto flex items-center justify-between py-4">

        <div className="text-2xl font-bold">
          <a href="#">💻</a>
        </div>

        <div className="hidden md:flex space-x-6 text-lg text-gray-600 font-semibold">
          <a
            href="#stack-outils"
            className=" hover:text-gray-800 transition duration-300"
          >
            Stack et Outils
          </a>
          <a
            href="#projets"
            className="hover:text-gray-800 transition duration-300"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="hover:text-gray-800 transition duration-300"
          >
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-300 focus:outline-none hover:text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div id="menu" className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center bg-gray-700 text-gray-300 py-4">
          <a
            href="#stack-outils"
            className="py-2 hover:text-white transition duration-300"
          >
            Stack et Outils
          </a>
          <a
            href="#projets"
            className="py-2 hover:text-white transition duration-300"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="py-2 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
