import { useEffect, useState } from "react";
import Card from "../../components/Card";
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
        <div className="my-8 grid md:grid-cols-3 gap-6">
          {allEstate.map((estate, id) => (
            <Card key={id} estate={estate}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
