// import { FaLocationDot } from "react-icons/fa6";
import { GiHouseKeys } from "react-icons/gi";
import { MdSell } from "react-icons/md";
const Card = ({estate}) => {
const {estate_img, estate_title , segment_name , description , price , status , area, location, } = estate ;



  return (
    <div className="card shadow-xl border p-4">
      <figure className="h-[170px] rounded-md overflow-hidden">
        <img
          src={estate_img}
          alt={segment_name}
        />
      </figure>
      <div className="py-4 space-y-4 ">
        <div className="flex justify-between items-center poppins-semibold text-[#131313B2]">
          <span className="px-4 py-2 bg-[#DAF7A6] rounded-md">
           {segment_name}
          </span>
          <p className="text-[#F70C09]">{price}</p>
        </div>
        <h1 className="poppins-bold text-[20px]">
          {estate_title}
        </h1>
        <div className="flex justify-between items-center border-b pb-4">
          <p>
           <span className="poppins-semibold">area:</span> {area}
          </p>
          {/* <p className="flex items-center gap-1 font-bold">
            <FaLocationDot className="text-red-500"></FaLocationDot>{location}
          </p> */}
          <p className=" flex items-center gap-1 poppins-semibold">
          { status === "Sell" ?  <MdSell className="text-red-500"></MdSell> : <GiHouseKeys className="text-red-500"></GiHouseKeys> }{status}
          </p>
        </div>
        <div className="flex gap-2 items-center">   
          <p className="poppins-reguler text-[18px] text-[rgba(19,19,19,0.70)"> {description.slice(0,70)}... </p>
        </div>
        <div className=" flex justify-center items-center">
          <button className="btn poppins-semibold">View Property</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
