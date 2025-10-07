import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { OptionSection } from "../../data";

// Parent container with stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between each child
    },
  },
};

// Child fadeIn (no movement)
const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <section id="features" className="my-20 mx-3 md:mx-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
        max-w-7xl mx-auto px-6"
      >
        {OptionSection.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeIn}
            className="flex flex-col items-center text-center"
          >
            {/* Icon */}
            <FontAwesomeIcon
              icon={item.icon}
              className="text-5xl text-[#b5b5b4] mb-5"
            />

            {/* Title */}
            <h4 className="text-3xl font-bold lg:text-2xl font-poppins mb-4">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[#797978] font-jost text-lg max-w-xs">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
