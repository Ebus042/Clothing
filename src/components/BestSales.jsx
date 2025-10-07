import { Pagination, Navigation } from "swiper/modules";
import { bestSellingSection } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCards from "./ProductCards";

const BestSales = ({ handleCart, handleWishList, addWishList }) => {
  return (
    <section className="font-jost mx-3 md:mx-12 uppercase my-36 py-10">
      <div>
        {/* Header */}
        <div className="flex flex-col flex-start md:flex-row justify-between md:items-center my-5">
          <h4 className="text-3xl uppercase">Best Selling Items</h4>
          <p
            className="uppercase tracking-wide relative after:absolute after:w-[10.2rem] lg:after:w-40 
              after:bg-gray-400 after:bottom-0 cursor-pointer after:left-0 after:h-[1px]"
          >
            View All Products
          </p>
        </div>

        {/* Swiper */}
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
          {bestSellingSection.map((item) => (
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

export default BestSales;
