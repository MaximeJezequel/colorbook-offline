import coloriage from "../assets/coloriage2.png";
import info from "../assets/info.png";
import esp from "../assets/esp.svg";
import rocket from "../assets/rocket.svg";
import monalisa from "../assets/monalisa_thick.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export const Home = ({ setChoice }: { setChoice: any }) => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-banner">
          <img src={coloriage} alt="Colorbook" />
        </div>
        <div className="home-wrapper">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            initialSlide={1}
            modules={[EffectCards]}
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
        <div className="home-credit">
          <img src={info} alt="Credit : @emji_magie" />
        </div>
      </div>
    </div>
  );
};
