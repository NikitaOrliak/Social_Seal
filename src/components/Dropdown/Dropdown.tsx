import React from "react";
import './Dropdown.scss';

type Props = {
  menu: {
    [key: string]: {
      [key: string]: any,
    }
  },
  handleClick: (value: boolean) => void,
};

export const Dropdown: React.FC<Props> = ({ menu, handleClick }) => {
  const categories = Object.keys(menu);

  return (
    <div className="dropdown">
      <ul className="dropdown__categories">
        {
          categories.map((category) => {
            const services = menu[category];

            const servicesNames = Object.keys(services);

            return (
              <li className="dropdown__category" key={category}>
                <a href={`#${category}`} className="dropdown__category--name">
                  {category}
                </a>
                <div className="dropdown__line" />
                <ul className="dropdown__services">
                  {
                    servicesNames.map(service => (
                      <li className="dropdown__service" key={service}>
                        {
                          services[service] ? (
                            <>
                              <img src={services[service]} alt="" />
                              <a className="dropdown__service--name" href={`#${service}`}>
                                {service}
                              </a>
                            </>
                          ) : (
                            <p className="dropdown__service--text">{service}</p>
                          )
                        }
                      </li>
                    ))
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>

      <a href="#services" className="dropdown__button" onClick={() => handleClick(false)}>View All Services</a>
    </div>
  );
}