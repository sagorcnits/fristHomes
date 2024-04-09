import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
const SliderSwip = () => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="rounded-md overflow-hidden   md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg')] bg-[100%_100%] bg-cover bg-no-repeat bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
          <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
              Single Family Homes
            </h1>
            <p className="poppins-reguler">Beautiful Villa with Ocean View</p>
            <p>This stunning villa offers breathtaking views of the ocean and luxurious amenities. Perfect for those seeking ultimate comfort and relaxation.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2022/05/22/07/46/city-7212852_960_720.jpg')] bg-no-repeat bg-cover bg-[100%_100%] bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
        <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
            Townhouses
            </h1>
            <p className="poppins-reguler">Sleek Townhouse in Urban Setting</p>
            <p>This sleek townhouse offers modern living in an urban setting. Close to restaurants, shops, and public transportation.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_1280.jpg')] bg-no-repeat bg-cover bg-[100%_100%] bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
        <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
            Apartments
            </h1>
            <p className="poppins-reguler">Cozy Apartment in Downtown</p>
            <p>This cozy apartment is located in the heart of the city, offering convenience and comfort. Ideal for urban living.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2019/12/25/19/53/kleve-4719160_1280.jpg')] bg-no-repeat bg-cover bg-[100%_100%] bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
        <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
            Student housing
            </h1>
            <p className="poppins-reguler">Cozy Student ApartmentDowntown</p>
            <p>This cozy apartment is perfect for students, located conveniently near the university campus. Ideal for those seeking a comfortable and focused study environment.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2017/05/06/17/31/villa-2290347_960_720.jpg')] bg-no-repeat bg-cover bg-[100%_100%] bg-blend-multiply bg-[#8ba0b1] flex justify-center items-center">
        <div className="md:w-1/2 mx-auto text-center  text-white flex flex-col gap-4">
            <h1 className="text-[40px] poppins-bold">
            Vacation rentals
            </h1>
            <p className="poppins-reguler">Charming Cottage in Countryside</p>
            <p>Escape to the countryside in this charming cottage surrounded by nature. Perfect for weekend getaways or peaceful retirement.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSwip;
