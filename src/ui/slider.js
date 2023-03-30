import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { Typography, Button } from "@mui/material";
import slide1 from "../assets/slider/slide1.jpeg";
import slide2 from "../assets/slider/slide2.jpeg";
import slide3 from "../assets/slider/slide3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SliderWrapper = styled("div")`
  height: 60vh;

  & .swiper {
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
    border-radius: 10px;
  }

  & .swiper-button-next,
  .swiper-button-prev {
    color: #7d7d7d;
  }
`;

const SwiperSlideWrapper = styled(SwiperSlide)`
  background: url(${({ bg }) => bg});
  background-position: right;
  background-repeat: no-repeat;

  & h5 {
    display: block;
    padding-top: 20%;
    padding-left: 10%;
    font-weight: 400;
  }
  & h4 {
    display: block;
    padding-left: 10%;
    color: #622a0c;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 10px;
  }

  button {
    margin-left: 10%;
    margin-top: 50px;
  }
`;

export const MainSlider = () => {
  return (
    <SliderWrapper>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlideWrapper bg={slide1}>
          <Typography variant="h5" color="secondary">
            Новая коллекция
          </Typography>
          <Typography variant="h4">кухонной мебели</Typography>
          <Button variant="outlined" color="secondary">
            уже в каталоге
          </Button>
        </SwiperSlideWrapper>

        <SwiperSlideWrapper bg={slide2}>
          <Typography variant="h5" color="secondary">
            Новая коллекция
          </Typography>
          <Typography variant="h4">шкафов купэ</Typography>
          <Button variant="outlined" color="secondary">
            уже в каталоге
          </Button>
        </SwiperSlideWrapper>

        <SwiperSlideWrapper bg={slide3}>
          <Typography variant="h5" color="secondary">
            Новая коллекция
          </Typography>
          <Typography variant="h4">Печати</Typography>
          <Button variant="outlined" color="secondary">
            уже в каталоге
          </Button>
        </SwiperSlideWrapper>
      </Swiper>
    </SliderWrapper>
  );
};
