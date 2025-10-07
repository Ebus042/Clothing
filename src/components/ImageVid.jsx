import { Play } from "lucide-react";
import videoImg from "../Images/video-image.jpg";
import textImg from "../Images/text-pattern.png";

const ImageVid = () => {
  return (
    <section className="my-20 mx-3">
      <div className="relative">
        {/* <video className="w-full">
          <source src={videoImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img
          src={videoImg} // use this if the image is in public/Images/
          alt="Video Thumbnail"
          className=""
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img
              src={textImg}
              className="inset-0 object-contain w-32 h-32 lg:w-64 lg:h-64 animate-spin-slow"
              alt=""
            />
          </div>
          <button
            className="absolute
           text-white p-4 rounded-full transition"
          >
            <Play size={30} className="z-10 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageVid;
