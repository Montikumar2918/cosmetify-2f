import React from "react";
import { Carousel } from "react-responsive-carousel";
// carousel css file
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images
import nykaa from "../assets/sliderImages/nykaa.gif";
import beauty1 from "../assets/sliderImages/beauty1.gif";
import beauty from "../assets/sliderImages/beauty.gif";
import product from "../assets/sliderImages/product.gif";
import allsale from "../assets/sliderImages/allsale.gif";
import styled from "styled-components";
import { small } from "../responsive";

const SliderDiv = styled.div`
  ${small({ display: "none" })}
`;

const Slider = () => {
  return (
    <SliderDiv>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        <div>
          <img
            height="250rem"
            style={{ objectFit: "cover" }}
            src={product}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="250rem"
            style={{ objectFit: "cover" }}
            src={nykaa}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="250rem"
            style={{ objectFit: "cover" }}
            src={beauty1}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="250rem"
            style={{ objectFit: "cover" }}
            src={beauty}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="250rem"
            style={{ objectFit: "cover" }}
            src={allsale}
            alt="slideimage"
          />
        </div>
      </Carousel>
    </SliderDiv>
  );
};

export default Slider;
