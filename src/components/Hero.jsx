import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";

import { HeroSection } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const Hero = () => {
  return (
    <motion.div
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="font-jost bg-[#f1f1f0]"
    >
      {/* Title + Description */}
      <div className="text-center px-4">
        <motion.h1
          variants={fadeUp(0.1)}
          className="text-[4rem] font-marcellus lg:text-[4.5rem] lg:w-full pt-36"
        >
          New Collections
        </motion.h1>
        <motion.p
          variants={fadeUp(0.3)}
          className="my-10 mx-auto xl:mt-2 text-lg text-[#797978] max-w-md lg:max-w-2xl tracking-normal lg:tracking-wide lg:leading-7 lg:text-xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
          voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus
          harum, quibusdam ex repellat eaque!
        </motion.p>
      </div>
      <div className="px-5 lg:px-20">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          pagination={{ clickable: true }}
          navigation
          // slidePerView={3}
          loop={true}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Hero Grid */}
          {/* <motion.div
          variants={container}
          className="grid lg:grid-cols-2 xl:grid-cols-3"
        > */}
          {HeroSection.map((section) => (
            <SwiperSlide key={section.id}>
              <motion.div
                variants={fadeUp(0.6)}
                className="group flex flex-col items-center justify-around gap-3 cursor-pointer"
              >
                <div
                  className="group overflow-hidden hover:scale-90
            transition-transform duration-500 ease-in-out relative"
                >
                  <img
                    src={section.src}
                    loading="lazy"
                    alt={section.alt}
                    className="w-full h-auto transition-transform duration-500 
                    object-cover ease-in-out group-hover:scale-125"
                  />
                </div>

                {/* Text Content */}
                <motion.div className="mx-2">
                  <h4
                    className="my-2 relative inline-block uppercase text-2xl
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[1px] after:w-0 after:bg-blue-700
                  after:transition-all after:duration-700 after:ease-in-out
                  hover:after:w-full"
                  >
                    {section.title}
                  </h4>

                  <p className="text-[#797978] tracking-wider text-lg leading-normal my-2">
                    {section.description}
                  </p>

                  {/* Link with double underline animation */}
                  <span
                    className="relative inline-block mb-10 uppercase text-xl
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:w-full after:bg-gray-400
                  before:content-[''] before:absolute before:left-0 before:bottom-0
                  before:h-[2px] before:w-0 before:bg-red-700
                  before:transition-all before:duration-500 before:ease-in-out
                  hover:before:w-full"
                  >
                    {section.link}
                  </span>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
          {/* </motion.div> */}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Hero;
