import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Protect.scss';

export const Protect = () => {
  return (
    <section className="protect">
      <div className="protect__leftSide">
        <img src={ICONS.protect_1} alt="protect 1" className="protect__icon--1 animated__protect--1" />
        <img src={IMAGES.protect} alt="protect" className="protect__image" />
        <img src={ICONS.protect_2} alt="protect 2" className="protect__icon--2 animated__protect--2" />
      </div>
      <div className="protect__rightSide">
        <p className="protect__preTitle">Keeping You Covered</p>
        <h3 className="protect__title">Social Gossiping
          Slowing You Down?</h3>
        <div className="protect__description">
          <p className="protect__description--text">
            Staying on top of how your brand is being used is an important aspect to protect your identity and reputation.
          </p>
          <p className="protect__description--text">
            Our sophisticated threat monitoring system enables us to quickly identify threats towards your brand and deal with them to prevent damage to your reputation.
          </p>
        </div>
        <div className="protect__threats">
          <p className="protect__threats--text">
            The most common threats we encounter:
          </p>
          <ul className="protect__threats--list">
            <li className="protect__threats--item">Brand Impersonation</li>
            <li className="protect__threats--item">Compromised Account</li>
            <li className="protect__threats--item">Scams</li>
            <li className="protect__threats--item">Hi-jacked Posts</li>
            <li className="protect__threats--item">Bad Sentiment</li>
            <li className="protect__threats--item">Bad Reviews</li>
            <li className="protect__threats--item">Competitor Envy</li>
            <li className="protect__threats--item">False Media</li>
            <li className="protect__threats--item">Low Social Authority</li>
            <li className="protect__threats--item">Information Inaccuracy</li>
            <li className="protect__threats--item">Missed Messages</li>
          </ul>
        </div>
        <div className="protect__buttons">
          <a href="#protect" className="protect__button--main">Protect Your Brand</a>
          <a href="#protect" className="protect__button--second">Find Out more</a>
        </div>
      </div>
    </section>
  );
}