import { useNavigate } from "react-router-dom";
import { Swiper } from "swiper/react";

const Wishlist = ({ addWishList, removeWishlist, handleCart }) => {
  const navigate = useNavigate();
  return (
    <section className="font-jost my-16 mx-10">
      <div>
        <div>
          <button
            className="bg-red-500 py-2 tracking-widest rounded-md px-10 text-2xl my-5 text-white"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div>
          {addWishList.length === 0 ? (
            <p
              className="text-center mt-32 lg:w-80 lg:mx-auto text-2xl bg-gradient-to-br from-gray-200
           via-red-100 to-red-50 py-5 px-2 rounded-lg leading-10 tracking-wider font-poppins"
            >
              No item on wishlist yet!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {addWishList.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt={item.label} />
                  <h4>{item.label}</h4>
                  <p>{item.price}</p>

                  <div
                    onClick={() => {
                      handleCart(item);
                      removeWishlist(item.id);
                    }}
                  >
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
