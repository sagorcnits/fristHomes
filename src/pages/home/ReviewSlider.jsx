import {
    A11y,
    Autoplay,
    Pagination,
    Scrollbar
} from "swiper/modules";
  
  import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../../components/ReviewCard";
const ReviewSlider = () => {
    return (
        <Swiper 
        loop={true}
        modules={[ Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        spaceBetween={50}
        >
            <SwiperSlide>
                  <ReviewCard source={"https://img.freepik.com/premium-photo/happy-businesswoman-showing-thumbs-up-video-call-having-through-smart-phone-office_662214-352290.jpg?w=360"} name={"David Jhon"} proffesion={"Student"}></ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
                  <ReviewCard source={"https://img.freepik.com/free-photo/handsome-man-with-thumb-up-white-background_1368-4330.jpg?w=360&t=st=1712629383~exp=1712629983~hmac=0b729b930dcbf964cb33c8cbb596fba3538a5c3c718bbafc326d1172b327eb2b"}name={"Miller"} proffesion={"Buisness"}></ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
                  <ReviewCard source={"https://img.freepik.com/premium-photo/man-business-suit-businessman-poses-against-gray-background-straightening-his-tie-looking-camera_396607-57938.jpg?w=740"} name={"Mr. James"} proffesion={"Student"}></ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
                  <ReviewCard source={"https://img.freepik.com/premium-photo/man-suit-with-thumbs-up_662214-71947.jpg?w=740"} name={"Mr. Oliver"} proffesion={"Worker"}></ReviewCard>
            </SwiperSlide>
        </Swiper>
    );
};

export default ReviewSlider;