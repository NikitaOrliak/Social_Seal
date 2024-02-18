import { AboutUs } from "../AboutUs/AboutUs";
import { Accelerate } from "../Accelerate/Accelerate";
import { Consultation } from "../Consultation/Consultation";
import { Experience } from "../Experience/Experience";
import { Faq } from "../Faq/Faq";
import { Protect } from "../Protect/Protect";
import { Questions } from "../Questions/Questions";
import { Risks } from "../Risks/Risks";
import { Sales } from "../Sales/Sales";
import { SliderSection } from "../Slider/Slider";
import { Squad } from "../Squad/Squad";
import { WhatWeDo } from "../WhatWeDo/WhatWeDo";
import './Main.scss';

export const Main = () => {
  return (
    <main className="main">
      <AboutUs />
      <Experience />
      <Risks />
      <Sales />
      <Protect />
      <SliderSection />
      <Questions />
      <WhatWeDo />
      <Consultation />
      <Squad />
      <Faq />
      <Accelerate />
    </main>
  );
};