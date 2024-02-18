import { useEffect, useState } from "react";
import { ANIMATIONS } from "../../images/animations/animations";
import { SWIPER } from "../../images/swiper/swiper";
import './Experience.scss';

export const Experience = () => {
  const [translate, setTranslate] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const block = document.querySelector('.experience__swiper')!;
      const start = block.getBoundingClientRect().top;

      if (start < viewportHeight && start > -viewportHeight) {
        if (!intervalId) {
          const newIntervalId = setInterval(() => {
            setTranslate(prev => prev === 60 ? 0 : prev + 20);
          }, 5000);
          setIntervalId(prevIntervalId => {
            if (!prevIntervalId) {
              return newIntervalId;
            } else {
              clearInterval(prevIntervalId);
              return newIntervalId;
            }
          });
        }
      } else {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      setViewportHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {
        setViewportHeight(window.innerHeight);
      });
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId, viewportHeight]);

  const swiperStyles = {
    transform: `translate(-${translate + (translate / 20 / 4)}em)`
  }

  return (
    <section className="experience">
      <img src={ANIMATIONS.shape_1} alt="shape 1" className="experience__shape--1 animated__shape--1" />
      <p className="experience__preTitle">Our Expertise is Your Success</p>
      <h3 className="experience__title">
        Struggling to Make Engaging Content?
      </h3>
      <p className="experience__description">
        From the research and planning to
        creating striking images and videos
        for your posts, our service focuses on
        creating a unique voice for your
        brand that will engage your audience
        and keep them coming back for
        more!
      </p>
      <div className="experience__swiper" style={swiperStyles} >
        <img src={SWIPER.swiper_1} alt="swiper 1" className="experience__swiper--image" style={{ opacity: translate >= 20 ? 0 : 1 }} />
        <img src={SWIPER.swiper_2} alt="swiper 2" className="experience__swiper--image" style={{ opacity: translate >= 40 ? 0 : 1 }} />
        <img src={SWIPER.swiper_3} alt="swiper 3" className="experience__swiper--image" style={{ opacity: translate >= 60 ? 0 : 1 }} />
        <img src={SWIPER.swiper_4} alt="swiper 4" className="experience__swiper--image" style={{ opacity: translate >= 80 ? 0 : 1 }} />
        <img src={SWIPER.swiper_5} alt="swiper 5" className="experience__swiper--image" />
      </div>
      <a href="#more" className="experience__more">View more</a>
      <img src={ANIMATIONS.shape_2} alt="shape 2" className="experience__shape--2 animated__shape--2" />
    </section>
  );
}