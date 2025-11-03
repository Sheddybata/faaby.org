import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#028a04] text-white overflow-x-hidden max-w-full w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FAABY Global Services</h3>
            <p className="text-[#e6f7e9] text-sm mb-4">
              Transforming waste into clean energy and empowering communities for a sustainable future.
            </p>
            <div className="space-y-3 text-sm text-[#e6f7e9]">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                <span>Bosepa Annex, Adjacent National Population Commission, Gidan Madara, Maiduguri</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="tel:+2348067677548" className="hover:text-white transition-colors">+234 806 767 7548</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="mailto:faabyservices@gmail.com" className="hover:text-white transition-colors">faabyservices@gmail.com</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-[#e6f7e9] hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-[#e6f7e9] hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/process" className="text-[#e6f7e9] hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/gallery" className="text-[#e6f7e9] hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-[#e6f7e9] hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-[#e6f7e9] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#e6f7e9] hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-[#e6f7e9] text-sm mb-3">Stay updated on our latest initiatives</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
              />
              <button className="bg-[#028a04] px-4 py-2 rounded-r-lg hover:bg-[#5ae077] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#5ae077] pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-[#e6f7e9]">&copy; 2024 FAABY Global Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#e6f7e9] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#e6f7e9] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
