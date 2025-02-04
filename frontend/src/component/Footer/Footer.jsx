import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 p-6 shadow-md">
      {/* Navigation Links */}
      <nav className="flex gap-4 justify-center mb-4">
        <Link to="/terms">
          <button className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">
            Terms
          </button>
        </Link>
        <Link to="/privacy">
          <button className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">
            Privacy
          </button>
        </Link>
        <Link to="/cancellation">
          <button className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">
            Cancellation
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">
            Contact
          </button>
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl text-pink-600 hover:text-pink-700" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-xl text-blue-600 hover:text-blue-700" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-green-600 hover:text-green-700" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="text-center text-gray-700">
        <p>Address:</p>
        <p>1D/64 A Nit Faridabad 121001</p>
        <p>Reach us @ Travelwithvistaraft@gmail.com</p>
        <div className="flex justify-center items-center mt-2">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
          <span className="ml-2">+91 8384076491</span>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-gray-600 text-sm mt-4">
        © {currentYear} Vistaraft. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
