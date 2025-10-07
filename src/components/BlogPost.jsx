import { blogPostSection } from "../../data";

const BlogPost = () => {
  return (
    <section id="blogs" className="mx-3 md:mx-12 my-20">
      <div>
        <div className="flex flex-col flex-start md:flex-row justify-between md:items-center my-5">
          <h4 className="text-3xl uppercase">Read Blog Posts</h4>
          <p
            className="uppercase tracking-wide relative after:absolute after:w-[5rem] lg:after:w-20 
              after:bg-gray-400 after:bottom-0 cursor-pointer after:left-0 after:h-[1px]"
          >
            View All
          </p>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          {blogPostSection.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt="blog images" />
                <div className="py-4 text-lg">
                  <p className="uppercase py-1 font-jost text-[#797978]">
                    {item.year}
                  </p>
                  <h4 className="uppercase py-2 font-marcellus text-2xl">
                    {item.label}
                  </h4>
                  <p className="text-[#797978] font-jost">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
