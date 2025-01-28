import banner1 from "../assets/b1.jpg";
import banner2 from "../assets/b2.jpg";
import banner3 from "../assets/b3.jpg";
import banner4 from "../assets/b4.jpg";

const Banner = () => {
  return (
    <div className="mt-3 md:mt-5 lg:mt-8 ">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={banner4} className="w-full rounded-md" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={banner2} className="w-full rounded-md" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={banner3} className="w-full rounded-md" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={banner1} className="w-full rounded-md" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
