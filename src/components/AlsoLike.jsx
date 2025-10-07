import { Pagination, Navigation } from "swiper/modules";
import { alsoLikeSection } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCards from "./ProductCards";

const AlsoLike = ({ handleCart, handleWishList, addWishList }) => {
  return (
    <section className="font-jost mx-3 md:mx-12 uppercase my-10">
      <div>
        <div className="flex flex-col flex-start py-4 md:flex-row justify-between md:items-center">
          <h4 className="text-3xl uppercase my-2">You may also like</h4>
          <p
            className="uppercase tracking-wide relative after:absolute after:w-[10.2rem] lg:after:w-40 
              after:bg-gray-400 after:bottom-0 after:left-0 after:h-[1.5px]"
          >
            View All Products
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="mySwiper"
          style={{ paddingBottom: "2rem" }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {alsoLikeSection.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCards
                item={item}
                handleCart={handleCart}
                handleWishList={handleWishList}
                addWishList={addWishList}
              />
            </SwiperSlide>
            //   onMouseEnter={() => setHoveredIndex(index)}
            //   onMouseLeave={() => setHoveredIndex(null)}
            //   className="group overflow-hidden"
            // >
            //   <div className="group overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out relative">
            //     <motion.img
            //       initial={{ scale: 0.4, opacity: 0 }}
            //       whileInView={{ scale: 1, opacity: 1 }}
            //       transition={{ duration: 1.5, ease: "easeInOut" }}
            //       viewport={{ once: true, amount: 0.2 }}
            //       src={item.image}
            //       loading="lazy"
            //       alt="Collections"
            //       className="md:w-96 object-contain hover:transition-transform hover:duration-500 group-hover:scale-125"
            //     />
            //     <motion.button
            //       initial={{ opacity: 0 }}
            //       animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            //       transition={{ duration: 0.3 }}
            //       className="absolute top-0 right-3 lg:top-3 lg:right-5 bg-white p-2 mt-5 shadow-md"
            //     >
            //       <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
            //     </motion.button>
            //   </div>
            //   <p className="text-xl mt-6">{item.label}</p>

            //   <div className="h-8 flex items-center">
            //     <AnimatePresence mode="wait">
            //       {hoveredIndex !== index ? (
            //         <motion.p
            //           key="price"
            //           initial={{ opacity: 0, y: -10 }}
            //           animate={{ opacity: 1, y: 0 }}
            //           exit={{ opacity: 0, y: -10 }}
            //           transition={{ duration: 0.3 }}
            //           className="my-5"
            //         >
            //           {item.price}
            //         </motion.p>
            //       ) : (
            //         <motion.button
            //           key="button"
            //           initial={{ opacity: 0, y: 10 }}
            //           animate={{ opacity: 1, y: 0 }}
            //           exit={{ opacity: 0, y: 10 }}
            //           transition={{ duration: 0.3 }}
            //           className="my-5 px-2 py-1 uppercase"
            //           onClick={() => handleCart()}
            //         >
            //           Add To Cart
            //         </motion.button>
            //       )}
            //     </AnimatePresence>
            //   </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AlsoLike;
