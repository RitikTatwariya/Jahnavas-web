import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">Jahnava's</span>
            <p className="mt-2 text-gray-400">
              Transforming businesses through technology
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Cloud Solutions</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Cybersecurity</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Software Development</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">IT Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Jahnava's IT Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;