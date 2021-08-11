import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LookBook1Image from "../../images/lookbook-1.png";
import LookBook2Image from "../../images/lookbook-2.png";

// Styles
const carouselWrapperStyle = {
  width: "100vw",
  height: "100vh"
}

const carouselImageStyle = {
  width: "100%",
  height: "100vh",
  "object-fit": "cover"
}

const lookBookWrapper = {
  position: "relative"
}

const lookBook1TextStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(0, -50%)",
  "max-width": "400px"
}

const lookBook2TextStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white"
}

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
    <div style={carouselWrapperStyle}>
      <Slider {...carouselSettings}>
        <div>
          <div style={lookBookWrapper}>
            <img src={LookBook1Image} style={carouselImageStyle}></img>
            <div style={lookBook1TextStyle}>
              <h1>Our community shapes us.</h1>
              <p>We started as a humble brand, which then continue to flourish into a tight-knit community that fosters friendship, positivity, and inclusivity.</p>
            </div>
          </div>
        </div>
        <div>
          <div style={lookBookWrapper}>
            <img src={LookBook2Image} style={carouselImageStyle}></img>
            <h1 style={lookBook2TextStyle}>Comfort In Style</h1>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default HomeCarousel
