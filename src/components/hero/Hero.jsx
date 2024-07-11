import hero from '../../assets/hero.png';
import  twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';
import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__contant">
            <h1 className="hero__title">{t("title")}</h1>
            <h2 className="hero__subtitle">{t("description")}</h2>
            <p className="hero__text">{t("info")}</p>
          <div className="links">
                <a href="https://twitter.com" className="twitter"><img src={twitter} alt="" />TWITTER</a>
                <a href="https://linkedin.com" className="linkedin"><img src={linkedin} alt="" />LINKEDIN</a>
                <a href="https://medium.com" className="medium"><img src={medium} alt="" />MEDIUM</a>
          </div>
        </div>
          <img className="hero__img" src={hero} alt="" />
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Hero;