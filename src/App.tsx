import React, { useState } from 'react';
import './App.scss';
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Partners } from "./components/Partners/Partners";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  return (
    <div className="app animated__navigation" id="home">
      <Navigation setIsActiveDropdown={setIsActiveDropdown} />
      <Header isActiveDropdown={isActiveDropdown} />
      <Partners />
      <Main />
      <Footer /> 
    </div>
  );
}
