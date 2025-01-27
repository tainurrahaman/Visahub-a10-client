import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const Homelayout = () => {
  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Homelayout;
