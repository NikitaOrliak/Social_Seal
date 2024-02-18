import { useEffect, useState } from "react";
import './AboutUs.scss';


export const AboutUs = () => {
  const [offices, setOffices] = useState(252);
  const [customers, setCustomers] = useState(15000);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const block = document.querySelector('.aboutUs__block')!;
      const start = block.getBoundingClientRect().top;

      if (start < viewportHeight && start > -viewportHeight) {
        if (!intervalId) {
          const newIntervalId = setInterval(() => {
            setOffices(prev => prev + 1);
            setCustomers(prev => prev + 50);
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


  return (
    <section className="aboutUs">
      <div className="aboutUs__leftSide">
        <p className="aboutUs__preTitle">Social Media Management is</p>
        <h3 className="aboutUs__title">
          Building Brands
          <br />
          Creating Connections
          <br />
          Driving Sales
        </h3>
        <div className="aboutUs__description">
          <p className="aboutUs__description--text">
            Social Media is more than just posting and showing off how many followers you have. It's a valuable addition to your marketing strategy that builds trust and creates connections with potential customers to drive sales and increase your revenue.
          </p>
          <p className="aboutUs__description--text">
            Save your time and money by partnering with us and start seeing results that give you the highest return on investment.
          </p>
          <p className="aboutUs__description--text">
            After all; when you grow, we grow together.
          </p>
        </div>
        <div className="aboutUs__buttons">
          <a href="#contact" className="aboutUs__contact">Contact Us</a>
          <a href="#help" className="aboutUs__help">How we can help</a>
        </div>
      </div>
      <div className="aboutUs__rightSide">
        <div className="aboutUs__block">
          <p className="aboutUs__block--counter">{offices}</p>
          <p className="aboutUs__block--description">Offices</p>
        </div>
        <div className="aboutUs__block">
          <p className="aboutUs__block--counter">10</p>
          <p className="aboutUs__block--description">Workers</p>
        </div>
        <div className="aboutUs__block">
          <p className="aboutUs__block--counter">{`${customers / 1000}K`}</p>
          <p className="aboutUs__block--description">Customers</p>
        </div>
        <div className="aboutUs__block">
          <p className="aboutUs__block--counter">1300+</p>
          <p className="aboutUs__block--description">Projects</p>
        </div>
      </div>
    </section>
  )
}