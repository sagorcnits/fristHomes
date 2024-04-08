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
        <div className="rounded-md overflow-hidden   md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg')] bg-[100%_100%] bg-cover bg-no-repeat relative">
          <div className="top-0 bottom-0 left-0 right-0 absolute bg-black opacity-35 z-0">
          </div>
            <div className="w-1/2 mx-auto z-50">
              <h1 className="text-[40px] text-white poppins-bold">
                The signle Home Family
                The signle Home Family
                The signle Home Family
                The signle Home Family
              </h1>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2022/05/22/07/46/city-7212852_960_720.jpg')] bg-no-repeat bg-cover bg-[100%_100%]">
          <div className="w-full h-full bg-black opacity-35"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_1280.jpg')] bg-no-repeat bg-cover bg-[100%_100%]">
          <div className="w-full h-full bg-black opacity-35"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2019/12/25/19/53/kleve-4719160_1280.jpg')] bg-no-repeat bg-cover bg-[100%_100%]">
          <div className="w-full h-full bg-black opacity-35"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-md overflow-hidden md:h-[550px] h-[300px] bg-[url('https://cdn.pixabay.com/photo/2017/05/06/17/31/villa-2290347_960_720.jpg')] bg-no-repeat bg-cover bg-[100%_100%]">
          <div className="w-full h-full bg-black opacity-35"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSwip;
