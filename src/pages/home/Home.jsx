import { useEffect, useState } from "react";
import Card from "../../components/Card";
import ReviewSlider from "./ReviewSlider";
import SliderSwip from "./SliderSwip";
const Home = () => {
  const [allEstate, setAllEstate] = useState([]);

  useEffect(() => {
    fetch("./estate.json")
      .then((res) => res.json())
      .then((data) => setAllEstate(data));
  }, []);

  return (
    <div>
      <SliderSwip></SliderSwip>
      <div className="my-10 ">
        <h1 className="text-[30px] text-center  text-[#403F3F] poppins-bold">
          We Provide <br /> The Best Property
        </h1>
        <div className="border-b border-dashed pb-6 ">
          <div className="my-8 grid md:grid-cols-3 gap-6">
            {allEstate.map((estate, id) => (
              <Card key={id} estate={estate}></Card>
            ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2 border poppins-semibold bg-transparent rounded-md">
              More Property
            </button>
          </div>
        </div>

        <div className="my-8">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
