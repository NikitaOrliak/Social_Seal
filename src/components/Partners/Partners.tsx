import { IMAGES } from "../../images/images";
import './Partners.scss'

export const Partners = () => (
  <div className="partners">
    <ul className="partners__list">
      <li>
        <a href="https://www.entrepreneur.com/" className="partners__link" target="blank">
          <img src={IMAGES.entrepreneur} alt="entrepreneur" className="partners__image" />
        </a>
      </li>
      <li>
        <a href="https://google.com/" className="partners__link" target="blank">
          <img src={IMAGES.google} alt="google" className="partners__image" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/" className="partners__link" target="blank">
          <img src={IMAGES.facebook} alt="facebook" className="partners__image" />
        </a>
      </li>
      <li>
        <a href="https://about.meta.com/" className="partners__link" target="blank">
          <img src={IMAGES.meta} alt="meta" className="partners__image" />
        </a>
      </li>
    </ul>
  </div>
);