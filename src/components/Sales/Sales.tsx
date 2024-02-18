import { ANIMATIONS } from "../../images/animations/animations";
import { IMAGES } from "../../images/images";
import './Sales.scss'

export const Sales = () => {
  return (
    <section className="sales">
      <div className="sales__leftSide">
        <p className="sales__preTitle">Thinking "Outside The Box"</p>
        <h3 className="sales__title">Troubles Growing Your Audience?</h3>
        <div className="sales__description">
          <p className="sales__description--text">
            Attract new followers that are relevant to your objectives by reaching outside your social media bubble, and you'll start to see a quicker return on your investment.
          </p>
          <p className="sales__description--text">
            Along with captivating visuals, our teams perform countless hours of research and planning to deliver optimized marketing campaigns that target your ideal audience who are most likely to convert into leads.
          </p>
          <p className="sales__description--text">
            By thoroughly planning your paid Social Media Advertising campaign, we are able to ensure that every penny of your marketing budget is well spent.
          </p>
        </div>
        <a href="#sales" className="sales__button">Start Driving Sales</a>
        <img src={ANIMATIONS.shape_6} alt="shape 6" className="sales__shape--2 animated__shape--6" />
      </div>
      <div className="sales__rightSide">
        <img src={ANIMATIONS.shape_5} alt="shape 5" className="sales__shape--1 animated__shape--5" />
        <img src={IMAGES.sales} alt="sales" className="sales__image" />
      </div>
    </section>
  );
}