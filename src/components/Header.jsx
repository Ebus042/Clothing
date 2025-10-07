import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { navbar } from "../../data";
import { useState, useEffect } from "react";

const Header = ({ addToCart, addWishList }) => {
  const [clicked, setClicked] = useState(false);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setClicked(false); // close mobile menu
  };

  // Scroll to hash on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 200);
    }
  }, []);

  return (
    <header className="shadow py-4 font-jost fixed w-full z-20 top-0 left-0 bg-[#f1f1f0]">
      <nav className="flex justify-between items-center mx-5 lg:ml-10 lg:mr-20 xl:mx-5">
        {/* Logo */}
        <p
          onClick={() => (window.location.href = "/#/")}
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 uppercase text-[#545454] lg:text-lg">
          {navbar.map((item) => (
            <span
              key={item.id}
              onClick={() => {
                window.location.hash = item.href.replace("#", "");
                scrollToSection(item.href.replace("#", ""));
              }}
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
            className="relative"
          >
            <p className="cursor-pointer text-xl hover:scale-125 hover:text-red-500 transition-all duration-500 ease-in-out">
              Wishlist
              {addWishList > 0 && (
                <span className="absolute -top-3 -right-4 text-[13px] px-1 py-0.2 rounded-full bg-red-500 text-white">
                  {addWishList}
                </span>
              )}
            </p>
          </div>

          <div
            onClick={() => (window.location.href = "#/carts")}
            className="relative"
          >
            <p className="cursor-pointer text-xl hover:scale-125 hover:text-red-500 transition-all duration-500 ease-in-out">
              Cart
              {addToCart > 0 && (
                <span className="absolute -top-3 -right-4 text-[13px] px-1 py-0.5 rounded-full bg-red-500 text-white">
                  {addToCart}
                </span>
              )}
            </p>
          </div>

          <button>
            <Search />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center gap-4 text-lg font-semibold">
          <Heart className="cursor-pointer w-8 h-8" />
          <ShoppingCart className="cursor-pointer w-8 h-8" />
          <button>
            <Search />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      {clicked && (
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg p-6 uppercase text-[#545454] text-lg z-40">
          <div className="flex flex-col space-y-6 mt-10">
            {navbar.map((item) => (
              <span
                key={item.id}
                onClick={() => {
                  window.location.hash = item.href.replace("#", "");
                  scrollToSection(item.href.replace("#", ""));
                }}
                className="block cursor-pointer hover:text-red-500 duration-500 ease-in-out hover:pl-4 transition-all"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
