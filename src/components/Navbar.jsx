import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Navigation links config — easy to extend or pass as props later
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  // Controls whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold text-gray-900 whitespace-nowrap">
            MyStore
          </span>
        </Link>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* ── Nav links ── */}
        {/*
          On mobile: hidden by default, shown when isMenuOpen is true.
          On desktop (md+): always visible, laid out in a row.
        */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)} // close menu after tapping a link on mobile
                  className={({ isActive }) =>
                    [
                      "block py-2 px-3 rounded transition-colors duration-150",
                      isActive
                        ? "text-white bg-blue-600 md:bg-transparent md:text-blue-600 md:p-0"
                        : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}