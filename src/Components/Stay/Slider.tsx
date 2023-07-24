import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { baseUrl } from '../../api';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
width: 90%;
margin: 0 auto;

.slick-slider .slick-arrow {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  font-size: 14px;
  line-height: 1;
  width: 70px;
  height: 70px;
  border-radius: 20%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease;
  display: flex;
}

.slick-slider .slick-arrow:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.slick-slider .slick-arrow.slick-prev {
  left: 20px;
}

.slick-slider .slick-arrow.slick-next {
  right: 20px;
}
`;

const Image = styled.img`
width: 100%;
object-fit: contain;
max-height: 540px;
height: auto;
`;



export const SliderComponent: React.FC <any> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        {images.map((image: any) => (
          <div key={image.id}>
            <Image src={baseUrl + image.url} alt="" />
          </div>
        ))}
      </Slider>
    </StyledSlider>
  );
};
