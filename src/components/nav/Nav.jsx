import React from 'react'
import logo from '../../assets/logo.svg'
import linkedin from '../../assets/linkedin.png'
import { Outlet } from 'react-router-dom'
import './Nav.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


const Nav = () => {
  const data = useTranslation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
     i18n.changeLanguage(lang);
     setLanguage(lang);
  };

  return (
    <>
    <Outlet />
    <div className='container'>
    <div className='nav-wrapper'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <a href="https://linkedin.com"><img src={linkedin} alt="" /></a>
      </div>
      <ul className='nav-list'>
        <li>
          <select defaultValue={data.i18n.language} onChange={ (e) => i18n.changeLanguage(e.target.value)} className='nav-select'>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </li>
        <li className='list__item'><a className='item__link' href="/">{t("home")}</a></li>
               <li className='list__item'><a className='item__link' href="">{t("portfolio")}</a></li>
               <li className='list__item'><a className='item__link' href="">CV</a></li>
               <li className='list__item'><a className='item__link' href="">{t("store")}</a></li>
               <li className='list__item'><a className='item__link' href="">FREELANCE</a></li>
               <li className='list__item'><a className='item__link' href="">{t("about")}</a></li>
               <li className='list__item'><a className='item__link' href="">{t("contact")}</a></li>
      </ul>
    </div>
    </div>
    
    </>
  )
}

export default Nav
