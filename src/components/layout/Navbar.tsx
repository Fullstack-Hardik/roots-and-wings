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
    name: 'More', href: '#',
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 w-full ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/50'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
          aria-label="Site navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0" onClick={closeMobileMenu}>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white" />
            </div>
            <div className="hidden xs:block">
              <span className="font-heading font-black text-base text-gray-900 leading-none block">Roots &amp; Wings</span>
              <span className="text-[10px] font-semibold text-sky-500 tracking-wider uppercase leading-none">School · Saharanpur</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-all duration-200 whitespace-nowrap">
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
                        className="absolute top-full left-0 mt-1 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
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
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    location.pathname === item.href
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white rounded-full transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', boxShadow: '0 4px 15px rgba(14,165,233,0.4)' }}
            >
              <span>🎒</span> Admissions
            </Link>

            {/* Hamburger — visible below lg */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-sky-100 text-gray-700 hover:text-sky-600 transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE SIDEBAR DRAWER ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop — covers full screen */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Sidebar Drawer — slides in from right */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[100] w-[80vw] max-w-[300px] bg-white flex flex-col shadow-2xl"
              aria-label="Mobile navigation"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-sky-50 to-violet-50 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-heading font-black text-sm text-gray-900">Roots &amp; Wings</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-400 hover:text-red-500 transition-colors border border-gray-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Links — scrollable */}
              <nav className="flex-1 overflow-y-auto py-3 px-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <div className="px-3 pt-3 pb-1 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          {item.name}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-2.5 px-4 py-3 text-sm font-semibold rounded-xl mb-0.5 transition-all ${
                              location.pathname === child.href
                                ? 'bg-gradient-to-r from-sky-50 to-violet-50 text-sky-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                            {child.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-2.5 px-4 py-3 text-sm font-semibold rounded-xl mb-0.5 transition-all ${
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
              </nav>

              {/* Drawer Footer CTAs */}
              <div className="px-4 py-5 border-t border-gray-100 bg-gradient-to-r from-sky-50 to-violet-50 shrink-0 space-y-2.5">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', boxShadow: '0 4px 15px rgba(14,165,233,0.35)' }}
                >
                  🎒 Apply for Admission
                </Link>
                <a
                  href="tel:+917409541444"
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-gray-800 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  📞 +91-74095-41444
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
