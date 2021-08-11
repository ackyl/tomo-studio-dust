import * as React from "react"
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LookBook1Image from "../../images/lookbook-1.png";
import LookBook2Image from "../../images/lookbook-2.png";

// Styles
const HomeCarouselWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const HomeCarouselImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const LookBookWrapper = styled.div`
  position: relative;
`

const LookBook1Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  max-width: 400px;
`

const LookBook2Text = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

// Data
const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
}

// Markup
const HomeCarousel = () => {
  return (
    <HomeCarouselWrapper>
      <Slider {...carouselSettings}>
        <div>
          <LookBookWrapper>
            <HomeCarouselImage src={LookBook1Image} />
            <LookBook1Wrapper>
              <h1>Our community shapes us.</h1>
              <p>We started as a humble brand, which then continue to flourish into a tight-knit community that fosters friendship, positivity, and inclusivity.</p>
            </LookBook1Wrapper>
          </LookBookWrapper>
        </div>
        <div>
          <LookBookWrapper>
            <HomeCarouselImage src={LookBook2Image} />
            <LookBook2Text>
              Comfort In Style
            </LookBook2Text>
          </LookBookWrapper>
        </div>
      </Slider>
    </HomeCarouselWrapper>
  )
}

export default HomeCarousel
