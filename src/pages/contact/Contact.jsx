import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import title from "../../utils/title";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
    AOS.init()
  },[])
  title("contact");
  return (
    <div>
      <h1  data-aos="fade-right" data-aos-duration="1000" className="text-center poppins-bold py-4 text-[40px] text-[#403F3F]">Contact Us</h1>
      <p data-aos="fade-left" data-aos-duration="1000" className="text-center text-[18px] poppins-reguler ">
      Follow the details below to contact us and use the form to send a message
      </p>

      <div className="grid md:grid-cols-3 gap-10 my-20">
        <div data-aos="fade-right" data-aos-duration="1000" className="flex gap-6 shadow-card items-center p-4 rounded-lg">
          <FaLocationDot className="text-[40px] text-[#28b463] "></FaLocationDot>
          <div>
            <h1 className="poppins-semibold text-[22px]">Our Main Office</h1>
            <p>New York, usa </p>
          </div>
        </div>
        <div data-aos="zoom-out" data-aos-duration="1000" className="flex gap-6 shadow-card items-center p-4 rounded-lg">
          <BiSolidPhoneCall className="text-[40px] text-[#28b463] "></BiSolidPhoneCall>
          <div>
            <h1 className="poppins-semibold text-[22px]">Phone Number</h1>
            <p>+1 666 777 21</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="flex gap-6 shadow-card items-center p-4  rounded-lg">
          <AiTwotoneMail className="text-[40px] text-[#28b463] "></AiTwotoneMail>
          <div>
            <h1 className="poppins-semibold text-[22px]">Mail</h1>
            <p>FrisHomes@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center">
        <div data-aos="fade-down-right" data-aos-duration="1000" >
          <img
            className="w-[80%]"
            src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1712659462~exp=1712663062~hmac=1f3a65814f5eb4ec3f502ada341b06d98955535c3b2b88961ce68996badbfade&w=740"
            alt=""
          />
        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000" >
          <form className="md:w-[80%] mx-auto">
            <h1 data-aos="fade-right" data-aos-duration="1000" className="text-[30px] font-bold py-4 poppins-bold text-[#403F3F]">
              Send Message
            </h1>
            <label className="input input-bordered flex items-center gap-2 mt-4">
              Name
              <input type="text" className="grow" placeholder="name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 mt-4">
              Email
              <input
                type="text"
                className="grow"
                placeholder="example@email.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mt-4">
              Phone
              <input type="number" className="grow" placeholder="number" />
            </label>

            <textarea
              className="w-full resize-none h-[200px] px-4 py-2 focus:outline-none grow border rounded-lg mt-4"
              type="text"
              placeholder="message"
            />

            <button
              onClick={(e) => handleSubmit(e)}
              className=" mt-4 w-full px-7 py-3 text-white font-bold rounded-lg btn hover:bg-black duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
