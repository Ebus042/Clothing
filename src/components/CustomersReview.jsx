import { reviews } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  FreeMode,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";

const CustomersReview = () => {
  return (
    <section id="testimonials" className="my-32 bg-[#f1f1f0] py-10">
      <div className="mx-3 md:mx-12">
        <h4 className="text-center font-marcellus font-semibold text-3xl my-10">
          We Love Good Compliment.
        </h4>
        <Swiper
          modules={[Pagination, EffectCoverflow, Autoplay, FreeMode]}
          loop={true}
          slidesPerView="auto"
          freeMode={false}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "2rem" }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,

            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="testimonialSwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide
              animate={{ rotate: 360, scaleX: 180 }}
              key={review.id}
              className="text-2xl lg:text-4xl text-[#797978] font-jost px-4"
            >
              <p className="my-5 text-center leading-relaxed">
                "{review.description}"
              </p>
              <p className="text-center italic lg:text-2xl ml-20 mb-10">
                {review.customer}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomersReview;
