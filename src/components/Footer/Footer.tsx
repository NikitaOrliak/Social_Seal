import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__forSupport">
        <img src={IMAGES.logo} alt="logo" className="footer__forSupport--image" />
        <p className="footer__forSupport--text">For Support</p>
        <h5 className="footer__forSupport--phone">0123 - 567 - 7650</h5>
      </div>
      <div className="footer__primaryPages">
        <h5 className="footer__primaryPages--title">Primary Pages</h5>
        <ul className="footer__primaryPages--list">
          <li className="footer__primaryPages--item">
            <a href="#home" className="footer__primaryPages--link">Home</a>
          </li>
          <li className="footer__primaryPages--item">
            <a href="#about" className="footer__primaryPages--link">About</a>
          </li>
          <li className="footer__primaryPages--item">
            <a href="#contact" className="footer__primaryPages--link">Contact</a>
          </li>
          <li className="footer__primaryPages--item">
            <a href="#service" className="footer__primaryPages--link">Service</a>
          </li>
        </ul>
      </div>
      <div className="footer__quickAccess">
        <h5 className="footer__quickAccess--title">Quick Access</h5>
        <ul className="footer__quickAccess--list">
          <li className="footer__quickAccess--item">
            <a href="#about" className="footer__quickAccess--link">About</a>
          </li>
          <li className="footer__quickAccess--item">
            <a href="#pricing" className="footer__quickAccess--link">Pricing</a>
          </li>
          <li className="footer__quickAccess--item">
            <a href="#contact" className="footer__quickAccess--link">Contact</a>
          </li>
          <li className="footer__quickAccess--item">
            <a href="#request" className="footer__quickAccess--link">Request for Demo</a>
          </li>
        </ul>
      </div>
      <div className="footer__company">
        <h5 className="footer__company--title">Company</h5>
        <div className="footer__company--block">
          <img src={ICONS.phone} alt="phone" className="footer__company--icon" />
          <a href="tel:+84959892011" className="footer__company--link">8 (495) 989—20—11</a>
        </div>
        <div className="footer__company--block">
          <img src={ICONS.mail} alt="mail" className="footer__company--icon" />
          <a href="mailto:contact@socialseal.com" className="footer__company--link">contact@socialseal.com</a>
        </div>
        <div className="footer__company--block">
          <img src={ICONS.location} alt="location" className="footer__company--icon" />
          <a href="https://www.google.com/maps/place/Adelphi+Hotel/@53.4053879,-2.9803537,17z/data=!3m1!5s0x487b21237b348a75:0xc37c103788db82da!4m9!3m8!1s0x487b21237fbfa321:0x7c407ed82abc9888!5m2!4m1!1i2!8m2!3d53.4053847!4d-2.9777788!16s%2Fm%2F05q49zj?entry=ttu" target="blank" className="footer__company--link">
            Ranelagh Place, Liverpool, L3 5UL, England
          </a>
        </div>
      </div>
      <div className="footer__rights">
        <p className="footer__rights--text">© 2023 Social Seal. All Rights Reserved</p>
      </div>
    </footer>
  )
}