import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";


const Card = ({ estate }) => {
  const {
    estate_img,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
  } = estate;

useEffect(()=>{
  AOS.init()
},[])

  return (
    <div className="card shadow-card duration-500  p-4" data-aos="fade-up" data-aos-duration="1000"   >
      <figure className="h-[170px] rounded-md overflow-hidden relative">
        <img className="hover:scale-[1.2] duration-500" src={estate_img} alt={segment_name} />
        <button className="cursor-default px-5 py-2  bg-[#D35400] absolute top-4 left-4 text-white poppins-semibold rounded-md">
          For {status}
        </button>
      </figure>
      <div className="py-4 space-y-4 ">
        <div className="flex justify-between items-center poppins-semibold text-[#131313B2]">
          <span className="px-4 py-2 bg-[#DAF7A6] rounded-md">
            {segment_name}
          </span>
          <p className="text-[#F70C09]">{price}</p>
        </div>
        <h1 className="poppins-bold text-[20px]">{estate_title}</h1>
        <div className="flex justify-between items-center border-b pb-4">
          <p>
            <span className="poppins-semibold">area:</span> {area}
          </p>
          <p className="flex items-center"><FaLocationDot className="text-[#28b463]"></FaLocationDot> {location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="poppins-reguler text-[18px] text-[rgba(19,19,19,0.70)">
            {description.slice(0, 70)}...
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <button className="btn poppins-semibold">View Property</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
