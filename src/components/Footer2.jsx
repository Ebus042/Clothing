import { footer2Images } from "../../data";

const Footer2 = () => {
  return (
    <footer className="mt-5 mx-3 md:mx-12">
      <div className="flex justify-between items-center text-[#797978] flex-col md:flex-row">
        <div className="flex md:items-center flex-col md:flex-row">
          <div className="flex my-4 items-center md:flex-row">
            <span className=" capitalize">We ship with:</span>
            {footer2Images.slice(0, 2).map((image, i) => (
              <img key={i} src={image} alt={`ship${i}`} />
            ))}
          </div>
          <div className="flex my-4 md:items-center">
            <span className="text-lg capitalize">Payment Option:</span>
            {footer2Images.slice(2).map((image, i) => (
              <img key={i} src={image} className="px-1" alt="" />
            ))}
          </div>
        </div>
        <div>
          <span>
            &copy; CopyRight {new Date().getFullYear()} NEA-DEV. All Right
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
