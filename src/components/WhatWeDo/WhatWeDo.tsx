import { IMAGES } from "../../images/images";
import './WhatWeDo.scss';

export const WhatWeDo = () => {
  return (
    <section className="whatWeDo">
      <p className="whatWeDo__preTitle">What We Do</p>
      <h3 className="whatWeDo__title">We design and develop web and mobile applications for our clients worldwide</h3>
      <img src={IMAGES.whatWeDo} alt="what we do" className="whatWeDo__image" />
      <p className="whatWeDo__description">Staying on top of how your brand is being used is an important aspect to protect your identity and reputation.</p>
      <a href="#protect" className="whatWeDo__button">Discover More</a>
    </section>
  );
}