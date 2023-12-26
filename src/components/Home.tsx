import coloriage from "../assets/coloriage2.png";
import esp from "../assets/esp.svg";
import rocket from "../assets/rocket.svg";
import monalisa from "../assets/monalisa_thick.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Home = ({ setChoice }: { setChoice: any }) => {
  return (
    <div className="home">
      <div className="home-banner">
        <img src={coloriage} alt="Colorbook" />
      </div>
      <div className="home-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          initialSlide={1}
          modules={[Keyboard, EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div onClick={() => setChoice(1)} className="home-card">
              <img src={esp} alt="ESP" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => setChoice(2)} className="home-card">
              <img src={rocket} alt="Rocket" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => setChoice(3)} className="home-card">
              <img src={monalisa} alt="Monalisa" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
