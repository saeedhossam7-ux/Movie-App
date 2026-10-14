import { Link, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faFilm, faFire, faHouse, faRightToBracket, faTv, faUserPlus, faUsers, faVideo, faXmark, } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // لو حابب تفتح قائمة Trending بالموبايل بالضغط

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <FontAwesomeIcon icon={faFilm} className="text-red-500 text-2xl mr-2" />
          <span>MovieHub</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none cursor-pointer p-2"
          type="button"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-2xl" />
        </button>

        {/* Desktop Navbar Content */}
        <div className="hidden lg:flex items-center justify-between w-full ml-10">

          {/* Left Side Navigation */}
          <ul className="flex items-center space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center transition-colors ${isActive ? 'text-red-500 font-semibold' : 'text-gray-300 hover:text-white'}`
                }
              >
                <FontAwesomeIcon icon={faHouse} className="mr-2 text-red-500" />
                Home
              </NavLink>
            </li>

            {/* Trending Dropdown */}
            <li className="relative group">
              <NavLink
                to="/trending"
                className="flex items-center text-gray-300 hover:text-white py-2"
              >
                <FontAwesomeIcon icon={faFire} className="mr-2 text-orange-500" />
                Trending
                <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
              </NavLink>

              <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-gray-200 shadow-lg rounded-md py-2 w-40 border border-gray-700">
                <li>
                  <NavLink to="/trending/movies" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faVideo} className="mr-2 text-red-400" /> Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/trending/people" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faUsers} className="mr-2 text-blue-400" /> People
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/trending/tv" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faTv} className="mr-2 text-green-400" /> TV
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Side - Auth Links */}
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/signup" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors shadow">
                <FontAwesomeIcon icon={faRightToBracket} className="mr-2" /> Login
              </Link>
            </li>
          </ul>

        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center text-gray-300 hover:text-white py-2"
              >
                <FontAwesomeIcon icon={faHouse} className="mr-3 text-red-500" />
                Home
              </NavLink>
            </li>

            {/* Trending links for mobile */}
            <div>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between text-gray-300 hover:text-white py-2 cursor-pointer"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faFire} className="mr-3 text-orange-500" />
                  Trending
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {isDropdownOpen && (
                <ul className="pl-6 pt-2 flex flex-col space-y-2 border-l border-gray-800 ml-2">
                  <li>
                    <NavLink to="/trending/movies" onClick={() => setIsOpen(false)} className="flex items-center text-sm text-gray-400 hover:text-white py-1">
                      <FontAwesomeIcon icon={faVideo} className="mr-2 text-red-400" /> Movies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/trending/people" onClick={() => setIsOpen(false)} className="flex items-center text-sm text-gray-400 hover:text-white py-1">
                      <FontAwesomeIcon icon={faUsers} className="mr-2 text-blue-400" /> People
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/trending/tv" onClick={() => setIsOpen(false)} className="flex items-center text-sm text-gray-400 hover:text-white py-1">
                      <FontAwesomeIcon icon={faTv} className="mr-2 text-green-400" /> TV
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </ul>

          <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center text-gray-300 hover:text-white py-2 bg-gray-800 rounded-lg border border-gray-700"
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow"
            >
              <FontAwesomeIcon icon={faRightToBracket} className="mr-2" /> Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
