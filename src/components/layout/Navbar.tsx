import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Programs', href: '#',
    children: [
      { name: 'Classes & Admissions', href: '/classes' },
      { name: 'Studies', href: '/studies' },
      { name: 'Activities', href: '/activities' },
    ]
  },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Teachers', href: '/teachers' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blogs', href: '/blogs' },
  {
    name: 'Info', href: '#',
    children: [
      { name: 'Parent Guide', href: '/parent-guide' },
      { name: 'Reviews', href: '/reviews' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/50'
          : 'bg-white/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-18" aria-label="Site navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-sky-300 transition-shadow duration-300">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-white animate-bounce-gentle" />
          </div>
          <div className="hidden xs:block">
            <span className="font-heading font-black text-lg text-gray-900 leading-none block">Roots & Wings</span>
            <span className="text-[10px] font-semibold text-sky-500 tracking-wider uppercase leading-none">School · Saharanpur</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex xl:items-center xl:gap-1">
          {navigation.map((item) => (
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-all duration-200">
                  {item.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`block px-4 py-2.5 text-sm font-semibold hover:bg-sky-50 hover:text-sky-600 transition-colors ${
                            location.pathname === child.href ? 'text-sky-600 bg-sky-50' : 'text-gray-700'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', boxShadow: '0 4px 15px rgba(14,165,233,0.4)' }}
          >
            <span className="animate-bounce-gentle inline-block">🎒</span>
            Admissions Open
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-sky-100 text-gray-700 hover:text-sky-600 transition-all"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl xl:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-sky-50 to-violet-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-heading font-black text-base text-gray-900">Roots & Wings</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-4 px-3">
                {navigation.map((item, i) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <div className="px-3 py-2 text-xs font-black text-gray-400 uppercase tracking-wider mt-2">{item.name}</div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl mb-1 transition-all ${
                              location.pathname === child.href
                                ? 'bg-gradient-to-r from-sky-50 to-violet-50 text-sky-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl mb-1 transition-all ${
                          location.pathname === item.href
                            ? 'bg-gradient-to-r from-sky-50 to-violet-50 text-sky-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer Footer CTA */}
              <div className="px-5 py-5 border-t border-gray-100 bg-gradient-to-r from-sky-50 to-violet-50 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white rounded-2xl transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', boxShadow: '0 4px 15px rgba(14,165,233,0.4)' }}
                >
                  🎒 Apply for Admission
                </Link>
                <a
                  href="tel:+917409541444"
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-gray-800 bg-white rounded-2xl shadow-sm"
                >
                  📞 +91-74095-41444
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
