import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Homelayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-4">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Homelayout;
