import React from "react";
import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Header.scss'

type Props = {
  isActiveDropdown: boolean,
}

export const Header: React.FC<Props> = ({ isActiveDropdown }) => {
  return (
    <header className="header" style={{ position: isActiveDropdown ? 'relative' : 'static', zIndex: isActiveDropdown ? -1 : 0 }}>
      <p className="header__description">
        Social Media Marketing That Works!
      </p>
      <h1 className="header__title">
        Save Time
        <br />
        Build Connections
        <br />
        Increase Profits
      </h1>
      <ul className="header__list">
        <li className="header__item">
          <a href="https://www.linkedin.com/" className="header__link" target="blank">
            <img src={ICONS.linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="header__item">
          <a href="https://www.facebook.com/" className="header__link" target="blank">
            <img src={ICONS.facebook} alt="facebook" />
          </a>
        </li>
        <li className="header__item">
          <a href="https://www.instagram.com/" className="header__link" target="blank">
            <img src={ICONS.instagram} alt="instagram" />
          </a>
        </li>
        <li className="header__item">
          <a href="https://twitter.com/" className="header__link" target="blank">
            <img src={ICONS.twitter} alt="twitter" />
          </a>
        </li>
        <li className="header__item">
          <a href="https://google.com/" className="header__link" target="blank">
            <img src={ICONS.google} alt="google" />
          </a>
        </li>
        <li className="header__item">
          <a href="https://www.youtube.com/" className="header__link" target="blank">
            <img src={ICONS.youtube} alt="youtube" />
          </a>
        </li>
      </ul>
      <div className="header__buttons">
        <a href="#plans" className="header__buttons--1">
          View Our Plans
        </a>
        <a href="#offer" className="header__buttons--2">
          What we offer
        </a>
      </div>
      <div className="header__images">
        <img src={IMAGES.header_1} className='header__image header__image--1' alt="header 1" />
        <img src={IMAGES.header_2} className='header__image header__image--2' alt="header 2" />
        <img src={IMAGES.header_3} className='header__image header__image--3' alt="header 3" />
      </div>
    </header>
  );
};