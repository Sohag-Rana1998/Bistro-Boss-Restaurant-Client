// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderImg1 from '../../../../public/home/slide1.jpg';
import SliderImg2 from '../../../../public/home/slide2.jpg';
import SliderImg3 from '../../../../public/home/slide3.jpg';
import SliderImg4 from '../../../../public/home/slide4.jpg';
import SliderImg5 from '../../../../public/home/slide5.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination, FreeMode } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, FreeMode]}
      className="mySwiper h-[430px]  mx-auto"
    >
      <SwiperSlide>
        <img src={SliderImg1} alt="" />
        <h3 className="text-2xl font-bold text-center text-white -mt-12">
          SALADS
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg2} alt="" />
        <h3 className="text-2xl font-bold text-center  text-white -mt-12">
          SOUPS
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg3} alt="" />
        <h3 className="text-2xl font-bold text-center text-white -mt-12">
          PIZZAS
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg4} alt="" />
        <h3 className="text-2xl font-bold text-center text-white -mt-12">
          DESSERTS
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg5} alt="" />
        <h3 className="text-2xl font-bold text-center text-white -mt-12">
          SALADS
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
