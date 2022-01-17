import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";
import icon1 from "../../images/mea.jpg";
import icon2 from "../../images/Genesis.jpg";
import icon3 from "../../images/Coinpong.jpg";
import icon4 from "../../images/Suisai.jpg";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Cube1() {
  return (
    <div className="container" id="ourgames">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="images/react.png" />
        </div>
        <div className="title_">
          <span>React</span>Swiper Slider
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={icon1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
