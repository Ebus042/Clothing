import { carts } from "../../data";
import { motion } from "framer-motion";

const Cart = () => {
  return (
    <section className="my-32 mx-3 md:mx-12">
      <div className="flex flex-col gap-6 md:flex-row justify-evenly items-center">
        {carts.map((cart) => (
          <div key={cart.id} className="group overflow-hidden">
            <div
              className="group overflow-hidden group-hover:scale-90
            transition-transform duration-500 ease-in-out relative"
            >
              <motion.img
                src={cart.image}
                loading="lazy"
                alt={cart.alt}
                className="object-contain hover:transition-transform 
                hover:duration-500 group-hover:scale-110
                "
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>
            {/* Label */}
            <motion.p
              className="mx-3 mt-2 text-lg text-[#797978]"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              {cart.label}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
