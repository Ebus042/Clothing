import { Pagination, Navigation } from "swiper/modules";
import { newArrival } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCards from "./ProductCards";

const Collections = ({ handleCart, handleWishList, addWishList }) => {
  return (
    <section id="shop" className="font-jost mx-3 md:mx-12 uppercase my-10">
      <div>
        <div className="flex flex-col flex-start py-4 md:flex-row justify-between md:items-center">
          <h4 className="text-3xl uppercase">Our New Arrivals</h4>
          <p
            className="uppercase tracking-wide cursor-pointer relative after:absolute after:w-[10.2rem] lg:after:w-40
              after:bg-gray-400 after:bottom-0 after:left-0 after:h-[1px]"
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
          {newArrival.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCards
                item={item}
                handleCart={handleCart}
                handleWishList={handleWishList}
                addWishList={addWishList}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Collections;
