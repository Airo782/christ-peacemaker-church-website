import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Prayer from "./pages/Prayer";
import Giving from "./pages/Giving";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Testimonies from "./pages/Testimonies";
import Store from "./pages/Store";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/sermons", label: "Sermons" },
    { href: "/events", label: "Events" },
    { href: "/testimonies", label: "Testimonies" },
    { href: "/prayer", label: "Prayer" },
    { href: "/giving", label: "Give" },
    { href: "/gallery", label: "Gallery" },
    { href: "/store", label: "Store" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                src="/logo.jpg"
                alt="Church Logo"
                className="h-16 w-auto"
              />
              <div className="ml-3 hidden sm:block">
                <p className="text-sm font-bold text-[#0088CC]">Christ the Peacemaker</p>
                <p className="text-xs text-[#FF6600]">City of Peace</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-[#0088CC] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-[#0088CC] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Christ the Peacemaker</h3>
            <p className="text-gray-400 text-sm">
              C&S Movement Church (City of Peace) - Serving Jos, Nigeria with faith, love, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about"><button className="hover:text-white">About Us</button></Link></li>
              <li><Link href="/sermons"><button className="hover:text-white">Sermons</button></Link></li>
              <li><Link href="/events"><button className="hover:text-white">Events</button></Link></li>
              <li><Link href="/store"><button className="hover:text-white">Store</button></Link></li>
              <li><Link href="/contact"><button className="hover:text-white">Contact</button></Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://facebook.com/akinjimi.johnson.olajide" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" title="Facebook Page">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/18pLm2jPuL/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" title="Facebook Group">
                <div className="flex items-center gap-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span className="text-xs font-bold">Group</span>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-1.002 1.541-2.67 2.512-4.564 2.512-3.062 0-5.555-2.493-5.555-5.555 0-1.894.971-3.562 2.512-4.564m0 0"/></svg>
              </a>
              <a href="https://wa.me/+2349067722638" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23l-.356.214-3.71-.973.992 3.63-.235.374a9.861 9.861 0 001.516 5.394c.732 1.196 1.693 2.24 2.876 2.997.359.21.748.41 1.157.54 1.322.43 2.851.394 4.703-.098 2.335-.626 4.337-2.316 5.537-4.65 1.2-2.334 1.415-5.195.39-7.773-.602-1.431-1.456-2.64-2.504-3.586-.92-.816-2.081-1.48-3.424-1.872-.742-.223-1.513-.338-2.296-.338z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Off Mafeng Private School</p>
              <p>The Street Opp. C.A.C Eto Baba</p>
              <p>Jos, Plateau State, Nigeria</p>
              <p className="mt-3">📞 +234 906 7722638</p>
              <p>📞 +234 807 703 8101</p>
              <a href="mailto:christpeacemaker14@gmail.com" className="text-gray-400 hover:text-white transition">📧 christpeacemaker14@gmail.com</a>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Times</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="font-semibold">Sunday:</span> 8:00 AM - 2:00 PM</p>
              <p><span className="font-semibold">Wednesday:</span> 6:00 PM - 8:00 PM</p>
              <p><span className="font-semibold">Friday:</span> 6:00 PM - 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Christ the Peacemaker Church of All Nations. All rights reserved.</p>
          <p className="mt-2">Serving with faith, love, and community | Jos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sermons" component={Sermons} />
      <Route path="/events" component={Events} />
      <Route path="/prayer" component={Prayer} />
      <Route path="/giving" component={Giving} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/testimonies" component={Testimonies} />
      <Route path="/store" component={Store} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
