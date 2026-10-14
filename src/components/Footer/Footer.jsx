import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faFilm, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-700 s">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">

          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div>
              <a href="#" className="flex items-center mb-3 text-white text-xl font-bold">
                <FontAwesomeIcon icon={faFilm} className="mr-2 text-red-500" />
                <span>MovieHub</span>
              </a>
              <p className="text-sm leading-relaxed mb-4">
                Your ultimate destination for discovering movies, TV shows, and trending entertainment.
                Explore, watch, and enjoy the best content from around the world.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 md:col-span-6">
            <h5 className="text-white font-semibold text-base mb-4">Quick Links</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to='/' className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to='/' className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Movies
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Trending
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2 md:col-span-6">
            <h5 className="text-white font-semibold text-base mb-4">Categories</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Comedy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Drama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1 text-red-500" />
                  Horror
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 md:col-span-6">
            <h5 className="text-white font-semibold text-base mb-4">Contact Us</h5>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLocationDot} className="mr-1 mt-1 text-red-500" />
                <span>123 Movie Street, Hollywood, CA 90028</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-1 mt-1 text-red-500" />
                <span>support@moviehub.com</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-1 mt-1 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h6 className="text-white font-medium text-sm mb-3">Subscribe to Newsletter</h6>
              <div className="flex">
                <input
                  type="email"
                  className="w-full bg-gray-900 border border-gray-800 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center" type="button">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-900 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="text-center md:text-start mb-4 md:mb-0">
            <p>
              © 2025 <span className="text-red-500 font-semibold">MovieHub</span>. All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
