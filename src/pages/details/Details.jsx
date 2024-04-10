import { useLoaderData, useParams } from "react-router-dom";
import title from "../../utils/title";

const Details = () => {
  const data = useLoaderData();
  const detailId = useParams();
  const detailEstate = data.find((estate) => estate.id === +detailId.id);
title("estate details")
  return (
    <div className="grid md:grid-cols-2 gap-8 my-16">
      <div className="overflow-hidden rounded-md h-[400px] md:h-full">
        <div
          className="bg-cover bg-[center_100%] w-full h-full duration-500  hover:scale-[1.2] bg-no-repeat"
          style={{ backgroundImage: `url(${detailEstate.estate_img})` }}
        ></div>
      </div>
      <div>
        <h1 className="poppins-bold text-[30px] pb-2">
          {detailEstate.estate_title}
        </h1>
        <p className="poppins-reguler font-bold text-[#131313CC] text-[18px] border-b pb-2">
          {detailEstate.segment_name}
        </p>
        <p className="py-2 poppins-reguler text-[18px]">
          {detailEstate.description}
        </p>
        <p className="text-[18px] py-2">
          <span className="font-bold">Price :</span> {detailEstate.price}
        </p>
        <p className="text-[18px] py-2">
          <span className="font-bold">Status :</span> {detailEstate.status}
        </p>
        <p className="text-[18px] py-2 border-b pb-2">
          <span className="font-bold">Area :</span> {detailEstate.area}
        </p>
        <p className="text-[18px] py-3">
          <span className="font-bold">Location :</span> {detailEstate.location}
        </p>
        <div className="poppins-semibold flex ite py-3">
          <h1 className="text-[18px]">facilities : </h1>
          <div className="grid grid-cols-2 w-[70%] mx-auto gap-4 items-center">
            {detailEstate.facilities.map((faci, id) => {
              return (
                <span
                  key={id}
                  className="px-4 py-2 bg-[rgba(10,22,190,0.03)] rounded-md"
                >
                  {faci}
                </span>
              );
            })}
          </div>
        </div>
        <div className="pt-12">
          <button className="btn">
            {detailEstate.status === "Sell" ? "Buy Now" : "Booking Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
