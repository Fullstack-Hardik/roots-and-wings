import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Classes & Admission', path: '/classes' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];
  const programs = [
    { name: 'Playgroup (2–3 yrs)', path: '/classes' },
    { name: 'Nursery (3–4 yrs)', path: '/classes' },
    { name: 'LKG (4–5 yrs)', path: '/classes' },
    { name: 'UKG (5–6 yrs)', path: '/classes' },
    { name: 'Class 1 to 5', path: '/classes' },
    { name: 'Activities & Events', path: '/activities' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      
      {/* Background stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: Math.random() * 3 + 2 + 's',
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="xl:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-black text-white text-lg leading-none block">Roots & Wings</span>
                <span className="text-[10px] font-semibold text-sky-400 tracking-wider uppercase">School · Saharanpur</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              The best kindergarten and primary school in Saharanpur, offering a joyful, activity-based learning experience for Nursery to Class 5.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-sky-400 rounded" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-violet-400 rounded" />
              Our Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-violet-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-violet-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-400 rounded" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-sky-400" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">Qazi Street, Mohalla Qazi,<br />Saharanpur, UP 247001</span>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <a href="tel:+917409541444" className="text-slate-300 text-sm hover:text-emerald-400 transition-colors">+91 74095 41444</a><br />
                  <a href="tel:+919997164404" className="text-slate-300 text-sm hover:text-emerald-400 transition-colors">+91 99971 64404</a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-pink-400" />
                </div>
                <a href="mailto:info@rootsandwings.edu.in" className="text-slate-300 text-sm hover:text-pink-400 transition-colors">info@rootsandwings.edu.in</a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-sky-500/20">
              <p className="text-sky-400 text-xs font-bold mb-0.5">School Hours</p>
              <p className="text-slate-300 text-xs">Mon–Sat &nbsp; 8:00 AM – 3:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Roots and Wings School, Saharanpur. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-pink-500 fill-pink-500" /> for young learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
