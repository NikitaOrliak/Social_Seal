import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Questions.scss';

export const Questions = () => {
  return (
    <section className="questions">
      <img src={IMAGES.questions_1} alt="questions 1" className="questions__image--1" />
      <div className="questions__top">
        <p className="questions__preTitle">Our Company</p>
        <h3 className="questions__title">We Create Creative Designs For Every Web Page</h3>
        <p className="questions__description">Staying on top of how your brand is being used is an important aspect to protect your identity and reputation.</p>
      </div>
      <div className="questions__bottom">
        <div className="questions__leftSide">
          <img src={IMAGES.questions_2} alt="questions 2" className="questions__image--2" />
          <img src={IMAGES.questions_3} alt="questions 3" className="questions__image--3" />
        </div>
        <div className="questions__rightSide">
          <h2 className="questions__main">All Your Questions Are Here</h2>
          <ul className="questions__list">
            <li className="questions__item">
              <img src={ICONS.check} alt="check" className="questions__check" />
              <p className="questions__question">Seo quotes to inspire your campaign</p>
            </li>
            <li className="questions__item">
              <img src={ICONS.check} alt="check" className="questions__check" />
              <p className="questions__question">Much easier to double your business</p>
            </li>
            <li className="questions__item">
              <img src={ICONS.check} alt="check" className="questions__check" />
              <p className="questions__question">Free page speed insights tool to find out exactly</p>
            </li>
            <li className="questions__item">
              <img src={ICONS.check} alt="check" className="questions__check" />
              <p className="questions__question">Seo quotes to inspire your campaign</p>
            </li>
          </ul>
          <a href="#discover" className="questions__discover">Discover More</a>
        </div>
      </div>
    </section>
  );
}