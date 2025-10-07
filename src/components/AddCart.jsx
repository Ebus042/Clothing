import React from "react";
import { useNavigate } from "react-router-dom";

const AddCart = ({ clearCart, addToCart, removeCart }) => {
  const navigate = useNavigate();
  return (
    <section className="font-jost my-16 mx-10">
      <div>
        <button
          className="bg-red-500 py-2 tracking-widest rounded-md px-10 text-2xl my-5 text-white"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {addToCart.map((cart) => (
          <div key={cart.id}>
            <img src={cart.image} alt="" />
            <p>{cart.label}</p>
            <p>{cart.price}</p>
            <button onClick={() => removeCart(cart.id)}>Remove Cart</button>
          </div>
        ))}
      </div>
      {addToCart.length === 0 ? (
        <p
          className="text-center mt-28 text-2xl lg:w-72 mx-auto bg-gradient-to-br from-gray-200
           via-red-100 to-red-50 py-5 rounded-lg leading-10 tracking-wider font-poppins"
        >
          Your Cart is empty
        </p>
      ) : (
        <div className="flex justify-evenly gap-10 text-white text-xl my-20">
          <button
            onClick={() => clearCart()}
            className="bg-red-500 px-4 py-2 flex-1 rounded-md"
          >
            Clear Cart
          </button>
          <button className="bg-green-700 flex-1 px-4 py-2 rounded-md">
            Make Order
          </button>
        </div>
      )}
    </section>
  );
};

export default AddCart;
