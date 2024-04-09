import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-2 md:px-0">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
