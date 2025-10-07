// src/components/ProductCard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const ProductCards = ({ item, handleCart, handleWishList, addWishList }) => {
  const [hovered, setHovered] = useState(false);

  const isInWishlist = addWishList?.some((p) => p.id === item.id) || false;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Wrapper */}
      <div
        className="overflow-hidden hover:scale-105
      transition-transform duration-500 ease-in-out group relative"
      >
        <motion.img
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          src={item.image}
          // whileHover={{ scale: 1.1 }}
          loading="lazy"
          alt={item.label}
          className="md:w-96 object-contain transition-transform
          duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered || isInWishlist ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-5 right-3 bg-white p-2 shadow-md"
          aria-label="Add to Wishlist"
          onClick={() => handleWishList(item)}
        >
          <Heart
            className={`w-5 h-5 ${
              isInWishlist ? "text-red-500" : "text-gray-700"
            }`}
          />
        </motion.button>
      </div>

      {/* Label */}
      <p className="text-xl mt-6">{item.label}</p>

      {/* Price ↔ Add to Cart */}
      <div className="h-8 flex items-center">
        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.p
              key="price"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {item.price}
            </motion.p>
          ) : (
            <motion.button
              key="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mb-3 px-2 py-1 uppercase"
              onClick={() => handleCart(item)}
            >
              Add To Cart
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductCards;
