import classNames from "classnames";
import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Faq.scss';
import { useState } from "react";

type Answers = {
  answer1: boolean,
  answer2: boolean,
  answer3: boolean,
  answer4: boolean,
}

export const Faq = () => {
  const [isActiveAnswers, setIsActiveAnswers] = useState<Answers>({
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
  })

  const handleClick = (answer: keyof Answers) => {
    setIsActiveAnswers(prev => ({ ...prev, [answer]: !isActiveAnswers[answer] }))
  }

  return (
    <section className="faq">
      <div className="faq__leftSide">
        <img src={IMAGES.faq} alt="faq" className="faq__image" />
        <h3 className="faq__title">All Your Questions Are Here</h3>
        <p className="faq__postTitle">& Knock Me Directly to Know More</p>
        <p className="faq__description">Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh.</p>
      </div>
      <div className="faq__rightSide">
        <ul className="faq__list">
          <li className="faq__item">
            <div className="faq__block" onClick={() => handleClick("answer2")}>
              <div className="faq__button">
                <img src={ICONS.plus} alt="plus" className="faq__icon" />
              </div>
              <h5 className="faq__question">What's the difference between Pro and Free?</h5>
            </div>
            <div className={classNames('faq__answer', {
              'faq__answer--open': isActiveAnswers.answer2,
            })}>
              <div className="faq__answer--text">
                Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,
              </div>
            </div>
          </li>
          <li className="faq__item">
            <div className="faq__block" onClick={() => handleClick("answer3")}>
              <div className="faq__button">
                <img src={ICONS.plus} alt="plus" className="faq__icon" />
              </div>
              <h5 className="faq__question">What's the difference between Pro and Free?</h5>
            </div>
            <div className={classNames('faq__answer', {
              'faq__answer--open': isActiveAnswers.answer3,
            })}>
              <div className="faq__answer--text">
                Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,
              </div>
            </div>
          </li>
          <li className="faq__item">
            <div className="faq__block" onClick={() => handleClick("answer4")}>
              <div className="faq__button">
                <img src={ICONS.plus} alt="plus" className="faq__icon" />
              </div>
              <h5 className="faq__question">What's the difference between Pro and Free?</h5>
            </div>
            <div className={classNames('faq__answer', {
              'faq__answer--open': isActiveAnswers.answer4,
            })}>
              <div className="faq__answer--text">
                Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,
              </div>
            </div>
          </li>
          <li className="faq__item">
            <div className="faq__block" onClick={() => handleClick("answer1")}>
              <div className="faq__button">
                <img src={ICONS.plus} alt="plus" className="faq__icon" />
              </div>
              <h5 className="faq__question">What's the difference between Pro and Free?</h5>
            </div>
            <div className={classNames('faq__answer', {
              'faq__answer--open': isActiveAnswers.answer1,
            })}>
              <div className="faq__answer--text">
                Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}