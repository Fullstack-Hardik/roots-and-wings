import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Roots & Wings</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Building Bright Futures for Young Minds in Saharanpur. A nurturing environment for kindergarten and primary education.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {[
                    { name: 'About', path: '/about' },
                    { name: 'Classes', path: '/classes' },
                    { name: 'Facilities', path: '/facilities' },
                    { name: 'Gallery', path: '/gallery' },
                    { name: 'Studies', path: '/studies' },
                    { name: 'Parent Guide', path: '/parent-guide' },
                    { name: 'Reviews', path: '/reviews' }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-gray-600 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Playgroup', 'Nursery', 'LKG & UKG', 'Class 1 to 5'].map((item) => (
                    <li key={item}>
                      <Link to="/classes" className="text-sm leading-6 text-gray-600 hover:text-primary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm leading-6 text-gray-600">Qazi Street, Mohalla Qazi, Saharanpur</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm leading-6 text-gray-600">7409541444, 9997164404</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm leading-6 text-gray-600">info@rootsandwings.edu.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Roots and Wings School, Saharanpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
