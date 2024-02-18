import { ANIMATIONS } from "../../images/animations/animations";
import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Risks.scss';

export const Risks = () => {
  return (
    <section className="risks">
      <img src={ANIMATIONS.shape_3} alt="shape 3" className="risks__shape--1 animated__shape--3" />
      <div className="risks__leftSide">
        <img src={IMAGES.risks} alt="risks" className="risks__image" />
        <img src={ICONS.risks_1} alt="risks 1" className="risks__icon risks__icon--1 animated__icon--1" />
        <img src={ICONS.risks_2} alt="risks 2" className="risks__icon risks__icon--2 animated__icon--2" />
        <img src={ICONS.risks_3} alt="risks 3" className="risks__icon risks__icon--3 animated__icon--3" />
        <img src={ICONS.risks_4} alt="risks 4" className="risks__icon risks__icon--4 animated__icon--4" />
        <img src={ICONS.risks_5} alt="risks 5" className="risks__icon risks__icon--5" />
      </div>
      <div className="risks__rightSide">
        <p className="risks__preTitle">Worry-Free</p>
        <h3 className="risks__title">Risking Your Reputation and Losing Sales?</h3>
        <div className="risks__description">
          <p className="risks__description--text">
            Our 24/7 Inbox Management is your answer to keep up with messages and not miss out on potential leads.
          </p>
          <p className="risks__description--text">
            By offering quick replies to your audience you will elevate your brands image and help you get the sale.
          </p>
        </div>
        <a href="#reply" className="risks__reply">Start Replying Faster</a>
        <img src={ANIMATIONS.shape_4} alt="shape 4" className="risks__shape--2 animated__shape--4" />
      </div>
    </section>
  );
};