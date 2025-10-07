import { shopCollectionSection } from "../../data";

const ShopCollection = () => {
  return (
    <section className=" bg-[#f1f1f0] overflow-hidden">
      <div className="my-16 py-20 mx-3 md:mx-12">
        {shopCollectionSection.map((item) => (
          <div key={item.id} className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2">
              <img src={item.image} className="w-full object-cover" alt="" />
            </div>
            <div className="lg:w-1/2 bg-white p-10 lg:p-24">
              <h4 className="text-3xl lg:text-4xl font-marcellus my-10 uppercase leading-tight tracking-wide">
                {item.label}
              </h4>
              <p className="font-jost my-10 text-xl leading-10 lg:w-96 text-[#797978]">
                {item.description}
              </p>
              <button
                className="text-xl mb-4 bg-gray-950 transition-all duration-500 ease-in-out
               md:py-2 md:px-2 text-white py-1 px-2 hover:bg-gray-500"
              >
                Shop Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopCollection;
