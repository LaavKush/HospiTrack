import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>
              We are dedicated to improving the hygiene and air quality in healthcare facilities. Our mission is to reduce hospital-acquired infections and ensure a safe environment for patients and staff.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:text-green-400">About</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
              <li><a href="/terms" className="hover:text-green-400">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-green-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Smart Hospital | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
