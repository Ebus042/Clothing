import { footerContents } from "../../data";

const Footer1 = () => {
  return (
    <footer className="mt-32  border-b-2">
      <div className="mx-3 py-10 md:mx-12 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h4 className="font-bold text-3xl my-5">{footerContents.logo}</h4>
          <p className="text-xl text-[#797978]">{footerContents.description}</p>
        </div>
        {footerContents.section.map((item, index) => (
          <div key={index}>
            <h3 className="uppercase my-5 text-2xl font-marcellus">
              {item.title}
            </h3>
            {item.links && (
              <ul>
                {item.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-xl cursor-pointer my-2 hover:scale-110 transition-all duration-500
                    hover:text-red-500 font-jost"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}

            {item.details && (
              <ul className="">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-xl font-jost">
                    <p className="text-[#797978] my-2">{detail.label}</p>
                    <p>{detail.value}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer1;
