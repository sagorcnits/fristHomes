import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import DealCard from "../../components/DealCard";
import title from "../../utils/title";
import ReviewSlider from "./ReviewSlider";
import SliderSwip from "./SliderSwip";
const Home = () => {
  const [allEstate, setAllEstate] = useState([]);

  useEffect(() => {
    fetch("./estate.json")
      .then((res) => res.json())
      .then((data) => setAllEstate(data));
  }, []);
  title("home");
  return (
    <main>
      <section className="mt-10">
        <SliderSwip></SliderSwip>
      </section>
      <section className="my-10">
        <h1 className="text-[30px] text-center  text-[#403F3F] poppins-bold">
          We Provide <br /> The Best Property
        </h1>
        <div className="border-b border-dashed pb-6 ">
          <div className="my-8 grid md:grid-cols-3 gap-6">
            {allEstate.map((estate, id) => (
              <Link key={id} to={`/details/${estate.id}`}>
                <Card estate={estate}></Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 border poppins-semibold bg-transparent rounded-md hover:bg-[#28b463] duration-500 hover:text-white">
              More Property
            </button>
          </div>
        </div>
      </section>
      <section className="my-8">
        <h1 className="text-center poppins-bold text-[30px]  text-[#403F3F]">
          Best Deal Right Now!
        </h1>
        <p className="py-4 text-center poppins-reguler text-[18px] text-[#403F3F]">
          When you need free CSS templates, <br /> you can simply type
          TemplateMo in any search
        </p>
        <div className="grid md:grid-cols-3 gap-6 my-8 ">
          <div className=" col-span-2 rounded-md overflow-hidden relative">
            <img
              className="h-full w-full"
              src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
              alt=""
            />
            <button className="cursor-default px-5 py-2  bg-[#D35400] absolute top-4 left-4 text-white poppins-semibold rounded-md">
              For Sell
            </button>
          </div>
          <div className="border shadow-md rounded-md  p-4">
            <DealCard></DealCard>
          </div>
        </div>
      </section>
      <section className="my-20">
        <h1 className="text-center text-[30px] text-[#403F3F] poppins-bold">
          Our Clients Say!
        </h1>
        <p className="text-center text-[#3a3939] poppins-reguler py-4">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam justo sed
          rebum vero dolor duo.
        </p>
        <div className="my-8">
          <ReviewSlider></ReviewSlider>
        </div>
      </section>
    </main>
  );
};

export default Home;
