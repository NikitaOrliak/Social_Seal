import './Slider.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SLIDER } from "../../images/slider/slider";

export const SliderSection = () => {
  const images_top = [SLIDER.slider_1, SLIDER.slider_2, SLIDER.slider_3, SLIDER.slider_4];
  const images_bot = [SLIDER.slider_5, SLIDER.slider_6, SLIDER.slider_7, SLIDER.slider_8];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    arrows: false,
    centerMode: true,
    draggable: false,
    variableWidth: true,
    pauseOnHover: false,
  };

  return (
    <section className="slider">
      <p className="slider__preTitle">Visually Impressive</p>
      <h3 className="slider__title">We Can't Wait To Redefine Your Brand</h3>
      <div className="slider__container">
        <Slider {...settings} className="slider__slider">
          {images_top.map(image => (
            <div key={image} className="slider__slide">
              <img src={image} alt={image} className="slider__image" />
            </div>
          ))}
        </Slider>

        <Slider {...settings} className="slider__slider">
          {images_bot.map(image => (
            <div key={image} className="slider__slide">
              <img src={image} alt={image} className="slider__image"/>
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider__discover">
        <h4 className="slider__discover--text">What Are You Waiting For?</h4>
        <a href="#discover" className="slider__discover--button">Discover More</a>
      </div>
    </section>
  )
}