import { IMAGES } from "../../images/images";
import './Squad.scss';

export const Squad = () => {
  return (
    <section className="squad">
      <p className="squad__preTitle">Our Expertise is Your Success</p>
      <h3 className="squad__title">Meet The Squad</h3>
      <p className="squad__description">Staying on top of how your brand is being used is an important aspect to protect your identity and reputation.</p>
      <div className="squad__block">
        <div className="squad__photos">
          <img src={IMAGES.squad_1} alt="squad 1" className="squad__image" />
          <img src={IMAGES.squad_2} alt="squad 2" className="squad__image" />
          <img src={IMAGES.squad_3} alt="squad 3" className="squad__image" />
        </div>
        <div className="squad__dots">
          <div className="squad__border">
            <div className="squad__dot"></div>
          </div>
          <div className="squad__border">
            <div className="squad__dot"></div>
          </div>
          <div className="squad__border squad__border--active">
            <div className="squad__dot squad__dot--active"></div>
          </div>
          <div className="squad__border">
            <div className="squad__dot"></div>
          </div>
          <div className="squad__border">
            <div className="squad__dot"></div>
          </div>
        </div>
      </div>

    </section>
  );
}