import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { navbar } from "../../data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ addToCart, addWishList }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section on the homepage
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle clicks on navbar links
  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");
    const isHome =
      location.hash === "" ||
      location.hash === "#/" ||
      location.pathname === "/";

    if (!isHome) {
      // Navigate to home first with hash
      window.location.href = "#/";
      setTimeout(() => scrollToSection(sectionId), 300);
    } else {
      scrollToSection(sectionId);
    }

    setClicked(false); // close mobile menu
  };

  return (
    <header className="shadow py-4 font-jost fixed w-full z-20 top-0 left-0 bg-[#f1f1f0]">
      <nav className="flex justify-between items-center mx-5 lg:ml-10 lg:mr-20 xl:mx-5">
        {/* Logo */}
        <p
          onClick={() => (window.location.href = "#/")}
          className="font-bold text-3xl cursor-pointer"
        >
          NEA-DEV
        </p>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setClicked(!clicked)}
          className="lg:hidden bg-gray-200 p-2 z-20 hover:bg-slate-300 transition-all duration-500 ease-in-out rounded-md"
        >
          {clicked ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-10 uppercase text-[#545454] lg:text-lg">
          {navbar.map((item) => (
            <span
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className="cursor-pointer hover:scale-125 hover:text-red-500 transition duration-300"
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center z-50 gap-10 text-[#545454]">
          <div
            onClick={() => (window.location.href = "#/wishlist")}
            className="relative cursor-pointer"
          >
            <Heart className="w-6 h-6" />
            {addWishList > 0 && (
              <span className="absolute -top-3 -right-4 text-[13px] px-1 py-0.2 rounded-full bg-red-500 text-white">
                {addWishList}
              </span>
            )}
          </div>

          <div
            onClick={() => (window.location.href = "#/carts")}
            className="relative cursor-pointer"
          >
            <ShoppingCart className="w-6 h-6" />
            {addToCart > 0 && (
              <span className="absolute -top-3 -right-4 text-[13px] px-1 py-0.5 rounded-full bg-red-500 text-white">
                {addToCart}
              </span>
            )}
          </div>

          <button>
            <Search />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center gap-4 text-lg font-semibold">
          <div
            onClick={() => (window.location.href = "#/wishlist")}
            className="relative"
          >
            <Heart className="w-8 h-8" />
            {addWishList > 0 && (
              <span className="absolute -top-2 -right-2 text-[14px] px-1.5 py-0.5 bg-red-500 text-white rounded-full">
                {addWishList}
              </span>
            )}
          </div>

          <div
            onClick={() => (window.location.href = "#/carts")}
            className="relative"
          >
            <ShoppingCart className="w-8 h-8" />
            {addToCart > 0 && (
              <span className="absolute -top-2 -right-2 text-[14px] px-1.5 py-0.5 bg-red-500 text-white rounded-full">
                {addToCart}
              </span>
            )}
          </div>

          <button>
            <Search />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "50%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg p-6 uppercase text-[#545454] text-lg z-40"
          >
            <div className="flex flex-col space-y-6 mt-10">
              {navbar.map((item) => (
                <span
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="block cursor-pointer hover:text-red-500 duration-500 ease-in-out hover:pl-4 transition-all"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
