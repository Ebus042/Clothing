import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import BestSales from "./components/BestSales";
import AlsoLike from "./components/AlsoLike";
import ShopCollection from "./components/ShopCollection";
import BlogPost from "./components/BlogPost";
import ImageVid from "./components/ImageVid";
import BrandLogo from "./components/BrandLogo";
import NewsLetter from "./components/NewsLetter";
import Instagram from "./components/Instagram";
import Footer1 from "./components/Footer1";
import CustomersReview from "./components/CustomersReview";
import Footer2 from "./components/Footer2";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import AddCart from "./components/AddCart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [addToCart, setAddToCart] = useState([]);
  const [addWishList, setAddWishList] = useState([]);

  const handleWishList = (item) => {
    setAddWishList((prev) =>
      prev.find((p) => p.id === item.id)
        ? prev.filter((p) => p.id !== item.id)
        : [...prev, item]
    );
  };

  const handleCart = (item) => setAddToCart((prev) => [...prev, item]);
  const removeWishlist = (id) =>
    setAddWishList((prev) => prev.filter((item) => item.id !== id));
  const removeCart = (id) =>
    setAddToCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setAddToCart([]);

  return (
    <>
      <ScrollToTop />
      <Header addToCart={addToCart.length} addWishList={addWishList.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main className="pt-10">
                <Features />
                <Cart />
                <section id="shop">
                  <Collections
                    handleCart={handleCart}
                    handleWishList={handleWishList}
                    addWishList={addWishList}
                  />
                  <BestSales
                    handleCart={handleCart}
                    handleWishList={handleWishList}
                    addWishList={addWishList}
                  />
                  <AlsoLike
                    handleCart={handleCart}
                    handleWishList={handleWishList}
                    addWishList={addWishList}
                  />
                </section>
                <ShopCollection />
                <ImageVid />
                <section id="testimonials">
                  <CustomersReview />
                </section>
                <section id="blog">
                  <BlogPost />
                </section>
                <BrandLogo />
                <section id="contact">
                  <NewsLetter />
                </section>
                <Instagram />
              </main>
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              addWishList={addWishList}
              handleWishList={handleWishList}
              handleCart={handleCart}
              removeWishlist={removeWishlist}
            />
          }
        />
        <Route
          path="/carts"
          element={
            <AddCart
              handleCart={handleCart}
              clearCart={clearCart}
              addToCart={addToCart}
              removeCart={removeCart}
            />
          }
        />
      </Routes>

      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App;
