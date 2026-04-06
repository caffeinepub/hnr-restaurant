import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import {
  Facebook,
  Home as HomeIcon,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";
import Order from "./pages/Order";

const WHATSAPP_URL =
  "https://wa.me/919847254030?text=Hi%20HNR%2C%20I%20would%20like%20to%20place%20an%20order";

// ── Navbar ───────────────────────────────────────────────
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "Order", to: "/order" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/hnr-logo-transparent.dim_400x200.png"
              alt="HNR Hotel"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <div
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#3D4152] hover:text-[#FC8019] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                activeProps={{ className: "text-[#FC8019] nav-active" }}
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FC8019] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC8019] hover:bg-[#E8710A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-orange"
              data-ocid="nav.primary_button"
            >
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#FC8019] hover:text-[#E8710A] transition-colors p-2"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden absolute left-0 right-0 top-16 bg-white border-t border-gray-100 shadow-lg py-4 px-6"
            data-ocid="nav.panel"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#3D4152] hover:text-[#FC8019] text-base font-medium py-2.5 border-b border-gray-100 transition-colors"
                  activeProps={{
                    className: "text-[#FC8019] border-b border-gray-100",
                  }}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-[#FC8019] hover:bg-[#E8710A] text-white text-center text-sm font-semibold px-5 py-3 rounded-lg transition-all"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.primary_button"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// ── Footer ───────────────────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#F8F8F8] border-t border-[#E9E9EB] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img
                src="/assets/generated/hnr-logo-transparent.dim_400x200.png"
                alt="HNR Hotel"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-[#93959F] text-sm leading-relaxed">
              Authentic Kerala Cuisine
            </p>
            <p className="text-[#93959F] text-xs mt-3 leading-relaxed">
              Serving Alathur with the finest traditional flavors since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#282C3F] font-semibold text-sm mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "Order Online", to: "/order" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#93959F] hover:text-[#FC8019] text-sm transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#282C3F] font-semibold text-sm mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#93959F] text-sm">
                <Phone size={14} className="text-[#FC8019] flex-shrink-0" />
                <a
                  href="tel:+919847254030"
                  className="hover:text-[#FC8019] transition-colors"
                >
                  +91 98472 54030
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#93959F] text-sm">
                <MapPin
                  size={14}
                  className="text-[#FC8019] flex-shrink-0 mt-0.5"
                />
                <span>Alathur, Kerala</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#282C3F] font-semibold text-sm mb-4 tracking-wide uppercase">
              Social Media
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/hnrhotelalathur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E9E9EB] flex items-center justify-center text-[#93959F] hover:text-[#FC8019] hover:border-[#FC8019]/40 transition-all shadow-sm"
                aria-label="Instagram"
                data-ocid="nav.link"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E9E9EB] flex items-center justify-center text-[#93959F] hover:text-[#FC8019] hover:border-[#FC8019]/40 transition-all shadow-sm"
                aria-label="Facebook"
                data-ocid="nav.link"
              >
                <Facebook size={16} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E9E9EB] flex items-center justify-center text-[#93959F] hover:text-green-500 hover:border-green-400/60 transition-all shadow-sm"
                aria-label="WhatsApp"
                data-ocid="nav.link"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E9E9EB] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#93959F] text-xs">
            © {currentYear} HNR Hotel Alathur. All rights reserved.
          </p>
          <p className="text-[#93959F] text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FC8019] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Floating WhatsApp ────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl animate-pulse-whatsapp hover:scale-110 transition-transform duration-200"
      aria-label="Order on WhatsApp"
      data-ocid="nav.primary_button"
    >
      <span className="sr-only">Order on WhatsApp</span>
      <svg
        viewBox="0 0 24 24"
        fill="white"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ── Bottom Navigation Bar ────────────────────────────────
function BottomNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const tabs = [
    { label: "Home", to: "/", icon: HomeIcon },
    { label: "Menu", to: "/menu", icon: UtensilsCrossed },
    { label: "Order", to: "/order", icon: ShoppingBag },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E9E9EB]"
      style={{ boxShadow: "0 -2px 10px rgba(0,0,0,0.08)" }}
      aria-label="Bottom navigation"
      data-ocid="nav.panel"
    >
      <div className="flex items-stretch">
        {tabs.map(({ label, to, icon: Icon }) => {
          const isActive =
            to === "/" ? currentPath === "/" : currentPath.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className="flex-1 flex flex-col items-center justify-center pt-2 pb-2 gap-0.5 relative transition-colors duration-150 group"
              data-ocid="nav.link"
              aria-current={isActive ? "page" : undefined}
            >
              {/* Active indicator bar */}
              <span
                className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-b-full transition-all duration-200"
                style={{
                  width: isActive ? "40px" : "0px",
                  backgroundColor: isActive ? "#FC8019" : "transparent",
                }}
              />
              <Icon
                size={22}
                strokeWidth={isActive ? 2.2 : 1.8}
                style={{ color: isActive ? "#FC8019" : "#93959F" }}
                className="transition-colors duration-150"
              />
              <span
                className="text-xs font-medium leading-none transition-colors duration-150"
                style={{ color: isActive ? "#FC8019" : "#93959F" }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

// ── Router Layout ────────────────────────────────────────
function RootLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BottomNav />
    </div>
  );
}

// ── Routes ───────────────────────────────────────────────
const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: MenuPage,
});

const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: Order,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  menuRoute,
  orderRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
