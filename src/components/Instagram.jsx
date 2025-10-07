import { Swiper, SwiperSlide } from "swiper/react";
import { instagramImages } from "../../data";
import { Autoplay, FreeMode } from "swiper/modules";

const Instagram = () => {
  return (
    <section className="relative overflow-visible">
      <Swiper
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        loop={true}
        speed={2000}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          0: { slidesPerView: 1 },
        }}
        className="relative"
      >
        {instagramImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="instagram images" className="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 
             font-jost text-lg z-10 bg-gray-950 text-white py-2 px-16 
             hover:bg-gray-600 w-64 lg:w-80 transition-all duration-500 ease-in-out"
      >
        <button className="text-lg">Follow us on Instagram</button>
      </div>
    </section>
  );
};

export default Instagram;
