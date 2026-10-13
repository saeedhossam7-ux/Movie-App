import { Link, NavLink } from 'react-router';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse ,} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
   <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <FontAwesomeIcon icon={faFilm} className="fa-solid font-sharp fa-film text-red-500 text-2xl mr-2" />
          <span>MovieHub</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none cursor-pointer"
          type="button"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faFilm} className='fa-solid fa-bars text-2xl'/>
        </button>

        {/* Navbar Content */}
        <div className="hidden lg:flex items-center justify-between w-full ml-10" id="navbarContent">
          
          {/* Left Side Navigation */}
          <ul className="flex items-center space-x-6">
            {/* Home Link */}
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center transition-colors ${isActive ? 'text-red-500 font-semibold' : 'text-gray-300 hover:text-white'}`
                }
              >
                <i className="fa-solid fa-house mr-2"></i>
                Home
              </NavLink>
            </li>

            {/* Trending Dropdown */}
            <li className="relative group">
              <NavLink 
                to="/trending" 
                className="flex items-center text-gray-300 hover:text-white py-2"
              >
                <i className="fa-solid fa-fire mr-2 text-orange-500"></i>
                Trending
                <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
              </NavLink>

              {/* Dropdown Menu */}
              <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-gray-200 shadow-lg rounded-md py-2 w-40 border border-gray-700">
                <li>
                  <NavLink 
                    to="/trending/movies" 
                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-video mr-2 text-red-400"></i>
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/trending/people" 
                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-users mr-2 text-blue-400"></i>
                    People
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/trending/tv" 
                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-tv mr-2 text-green-400"></i>
                    TV
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Side - Auth Links */}
          <ul className="flex items-center space-x-4">
            <li>
              <Link 
                to="/signup" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-user-plus mr-2"></i>
                Sign Up
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors shadow"
              >
                <i className="fa-solid fa-right-to-bracket mr-2"></i>
                Login
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
