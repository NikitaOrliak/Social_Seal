import { useEffect, useState } from "react";
import { ICONS } from "../../images/icons/icons";
import { IMAGES } from "../../images/images";
import './Accelerate.scss';
import { getPdf } from "../../api/socialSeal";
import classNames from "classnames";
import { Loader } from "../Loader";

export const Accelerate = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input.trim()) {
      setIsLoading(true);

      getPdf(input.trim())
        .then(() => setIsSuccess(true))
        .catch(() => setIsError(true))
        .finally(() => {
          setInput('');
          setIsLoading(false);

          setTimeout(() => {
            setIsError(false);
            setIsSuccess(false);
          }, 2000)
        })
    }
  }

  const buttonStyles = {
    cursor: input ? 'pointer' : 'not-allowed',
    opacity: input ? '1' : '0.5',
  }

  return (
    <section className="accelerate">
      <h3 className="accelerate__title">Accelerate</h3>
      <h4 className="accelerate__postTitle">Your Social Strategy</h4>
      <p className="accelerate__description">Find out how to make social media work for you. We'll send you a PDF that explains different marketing strategies to help your business grow.</p>
      <form action="POST" className="accelerate__form" onSubmit={handleSubmit}>
        <img src={IMAGES.accelerate} alt="accelerate" className="accelerate__image" style={{ transform: `translate(-90%, -150%) translate(${position.x}px, ${position.y}px)` }} />
        <div className="accelerate__form--block">
          <img src={ICONS.hand} alt="hand" className="accelerate__form--icon" />
          <input type="email" placeholder="Enter your e-mail address" className="accelerate__form--input" value={input} onChange={e => setInput(e.target.value.trim())} />
          <button
            type="submit"
            disabled={!input}
            style={buttonStyles}
            className={classNames('accelerate__form--button', {
              'accelerate__form--button--error': isError,
              'accelerate__form--button--success': isSuccess,
            })}
          >
            {
              isLoading && (<Loader />)
            }

            {
              !isLoading && isError && ('Error')
            }

            {
              !isLoading && isSuccess && ('Success')
            }

            {
              !isLoading && !isError && !isSuccess && ('Download PDF')
            }
          </button>
        </div>
      </form>
      <p className="accelerate__info">
        Upon supplying us with your e-mail, we will send you a link to download this PDF. We will also follow up with you within 5 days to see if there is any way we can help you and we'll sign you up to receive updated tips and tricks for growing your social media but don't worry, we only send this newsletter once a month, and you can easily unsubscribe from all communications at any time.
      </p>
    </section>
  );
}