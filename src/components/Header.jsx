import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { navbar } from "../../data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Header = ({ addToCart, addWishList }) => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Handle navigation
  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      // Scroll sections on homepage
      if (location.pathname === "/") scrollToSection(href.replace("#", ""));
      else window.location.href = `/#${href.replace("#", "")}`;
    } else {
      // Navigate to another page
      window.location.href = `#/${href.replace("/", "")}`;
    }
    setClicked(false);
  };

  return (
    <header className="shadow py-4 font-jost fixed w-full z-20 top-0 left-0 bg-[#f1f1f0]">
      <nav className="flex justify-between items-center mx-5 lg:ml-10 lg:mr-20 xl:mx-5">
        {/* Logo */}
        <p
          onClick={() => (window.location.href = "/#")}
          className="font-bold text-3xl cursor-pointer"
        >
          NEA-DEV
        </p>

        {/* Desktop nav */}
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

        {/* Desktop icons */}
        <div className="hidden lg:flex items-center gap-10 text-[#545454]">
          <div
            onClick={() => (window.location.href = "#/wishlist")}
            className="relative cursor-pointer"
          >
            <Heart className="w-6 h-6" />
            {addWishList > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[12px]">
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
              <span className="absolute -top-3 -right-3 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[12px]">
                {addToCart}
              </span>
            )}
          </div>
          <button>
            <Search />
          </button>
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setClicked(!clicked)}
          className="lg:hidden bg-gray-200 p-2 rounded-md"
        >
          {clicked ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile slide menu */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-100 p-6 uppercase text-[#545454] z-40"
          >
            <div className="flex flex-col gap-6 mt-10">
              {navbar.map((item) => (
                <span
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="cursor-pointer hover:text-red-500"
                >
                  {item.label}
                </span>
              ))}
              <span
                onClick={() => (window.location.href = "#/wishlist")}
                className="cursor-pointer hover:text-red-500"
              >
                Wishlist
              </span>
              <span
                onClick={() => (window.location.href = "#/carts")}
                className="cursor-pointer hover:text-red-500"
              >
                Cart
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
