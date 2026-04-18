import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Presentation, 
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Portfolio', href: isHome ? '#portfolio' : '/#portfolio' },
    { name: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { name: 'Why Us', href: isHome ? '#why-us' : '/#why-us' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled || !isHome ? "bg-white/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Presentation className="text-blue-600 w-8 h-8" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            SlidezPro
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={isHome ? "#contact" : "/#contact"} 
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={isHome ? "#contact" : "/#contact"} 
                className="bg-blue-600 text-white text-center px-5 py-2.5 rounded-full font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 border-b border-slate-800 pb-12 grid md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Presentation className="text-blue-500 w-8 h-8" />
            <span className="text-2xl font-bold text-white">SlidezPro</span>
          </Link>
          <p className="max-w-xs mb-6">
            Expert presentation designer specializing in academic and business slides that clearly communicate your ideas.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><a href="/#services" className="hover:text-blue-500 transition-colors">Academic Services</a></li>
            <li><a href="/#services" className="hover:text-blue-500 transition-colors">Business Solutions</a></li>
            <li><a href="/#services" className="hover:text-blue-500 transition-colors">Custom Designs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="/#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
            <li><a href="/#pricing" className="hover:text-blue-500 transition-colors">Pricing</a></li>
            <li><a href="/#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 SlidezPro. All rights reserved.</p>
        <div className="flex gap-8 text-sm">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
