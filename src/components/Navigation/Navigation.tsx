import React, { useEffect, useState } from "react";
import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Navigation.scss';
import classNames from "classnames";
import { Dropdown } from "../Dropdown/Dropdown";
import { SalesMenu } from "./SalesMenu";
import { PlansMenu } from "./PlansMenu";

type Props = {
  setIsActiveDropdown: (value: boolean) => void,
}

export const Navigation: React.FC<Props> = ({ setIsActiveDropdown }) => {
  const [isServices, setIsServices] = useState(false);
  const [isPlans, setIsPlans] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  useEffect(() => {
    if (isPlans || isServices) {
      setIsActiveDropdown(true);
    } else {
      setIsActiveDropdown(false);
    }
  }, [isPlans, isServices, setIsActiveDropdown])

  return (
    <div className="navigation animated__navigation">
      <nav className="navigation__top">
        <a href="#home" className="navigation__home">
          <img
            src={IMAGES.socialSeal}
            alt="Social Seal"
            className="navigation__icon"
          />
        </a>

        <ul className="navigation__list navigation__list--top">
          <li>
            <a href="#managment" className="navigation__link">
              Management
            </a>
          </li>
          <li>
            <a href="#marketing" className="navigation__link">
              Marketing
            </a>
          </li>
          <li>
            <a href="#increase_sales" className="navigation__link">
              Increase Sales
            </a>
          </li>
          <li>
            <div className="navigation__block" onClick={() => {
              setIsServices(!isServices);
              setIsPlans(false);
            }}>
              <p className={classNames('navigation__link', {
                'navigation__link--active': isServices,
              })}
              >
                Services
              </p>
              <img src={isServices ? ICONS.arrowUp : ICONS.arrowDown} alt="arrow" className="navigation__arrow" />
            </div>
          </li>
          <li>
            <div className="navigation__block" onClick={() => {
              setIsPlans(!isPlans);
              setIsServices(false);
            }}>
              <p className={classNames('navigation__link', {
                'navigation__link--active': isPlans,
              })}
              >
                Plans & Pricing
              </p>
              <img src={isPlans ? ICONS.arrowUp : ICONS.arrowDown} alt="arrow" className="navigation__arrow" />
            </div>
          </li>
        </ul>

        <a href="#contact" className="navigation__button navigation__button--top" onClick={() => {
          setIsBurger(false);
          setIsServices(false);
          setIsPlans(false);
        }}>
          Speak With Us!
        </a>

        <a href={isBurger ? '#menu' : "#home"} className="navigation__burger" onClick={() => {
          setIsBurger(!isBurger);
          setIsServices(false);
          setIsPlans(false);
          if (!isBurger) {
            setTimeout(() => {
              document.body.scrollTop = document.documentElement.scrollTop = 0;
            }, 0)
          }
        }}>
          <img
            src={ICONS.burger}
            alt="Social Seal"
            className="navigation__icon"
          />
        </a>

        <aside id="menu" className="navigation__menu">
          {
            isServices && window.innerWidth < 768 && (
              <div className='navigation__dropdown animated__dropdown'>
                <div
                  className="navigation__block"
                  onClick={() => {
                    setIsServices(!isServices);
                    setIsPlans(false);
                  }}>
                  <p className={classNames('navigation__link', {
                    'navigation__link--active': isServices,
                  })}
                  >
                    Services
                  </p>
                  <img src={isServices ? ICONS.arrowUp : ICONS.arrowDown} alt="arrow" className="navigation__arrow" />
                </div>
                <Dropdown menu={SalesMenu} handleClick={setIsServices} />
              </div>
            )
          }

          {
            isPlans && window.innerWidth < 768 && (
              <div className='navigation__dropdown animated__dropdown'>
                <div
                  className="navigation__block"
                  onClick={() => {
                    setIsServices(false);
                    setIsPlans(!isPlans);
                  }}>
                  <p className={classNames('navigation__link', {
                    'navigation__link--active': isPlans,
                  })}
                  >
                    Plans & Pricing
                  </p>
                  <img src={isPlans ? ICONS.arrowUp : ICONS.arrowDown} alt="arrow" className="navigation__arrow" />
                </div>
                <Dropdown menu={PlansMenu} handleClick={setIsPlans} />
              </div>
            )
          }

          {
            ((!isServices && !isPlans) || window.innerWidth >= 768) && (
              <ul className="navigation__list">
                <li>
                  <a href="#managment" className="navigation__link" onClick={() => {
                    setIsServices(false);
                    setIsPlans(false);
                  }}>
                    Management
                  </a>
                </li>
                <li>
                  <a href="#marketing" className="navigation__link" onClick={() => {
                    setIsServices(false);
                    setIsPlans(false);
                  }}>
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#increase_sales" className="navigation__link" onClick={() => {
                    setIsServices(false);
                    setIsPlans(false);
                  }}>
                    Increase Sales
                  </a>
                </li>
                <li>
                  <div className="navigation__block" onClick={() => {
                    setIsServices(!isServices);
                    setIsPlans(false);
                  }}>
                    <p className={classNames('navigation__link', {
                      'navigation__link--active': isServices,
                    })}
                    >
                      Services
                    </p>
                    <img src={isServices ? ICONS.arrowUp : ICONS.arrowDown} alt="arrow" className="navigation__arrow" />
                  </div>
                </li>
                <li>
                  <div className="navigation__block" onClick={() => {
                    setIsPlans(!isPlans);
                    setIsServices(false);
                  }}>
                    <p className={classNames('navigation__link', {
                      'navigation__link--active': isPlans,
                    })}
                    >
                      Plans & Pricing
                    </p>
                    <img src={isPlans ? ICONS.arrowUp : ICONS.arrowDown} alt="arrow" className="navigation__arrow" />
                  </div>
                </li>
              </ul>
            )
          }


          <a href="#contact" className="navigation__button navigation__button--aside" onClick={() => {
            setIsBurger(false);
            setIsServices(false);
            setIsPlans(false);
          }}>
            Speak With Us!
          </a>
        </aside>
      </nav>

      {
        window.innerWidth >= 768 && (
          <div className={classNames('navigation__dropdown', {
            'animated__dropdown': isServices || isPlans,
          })}>
            {
              isServices && (
                <Dropdown menu={SalesMenu} handleClick={setIsServices} />
              )
            }

            {
              isPlans && (
                <Dropdown menu={PlansMenu} handleClick={setIsPlans} />
              )
            }
          </div>
        )
      }
    </div >
  );
}