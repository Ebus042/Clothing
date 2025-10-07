import { brandLogos } from "../../data";

const BrandLogo = () => {
  return (
    <section className="mx-3 md:mx-12 my-10">
      <div
        className="flex gap-10 flex-col justify-evenly
        md:flex-row
      "
      >
        {brandLogos.map((logo, i) => (
          <div key={i}>
            <img src={logo} className="w-1/2" alt="images of partners" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogo;
