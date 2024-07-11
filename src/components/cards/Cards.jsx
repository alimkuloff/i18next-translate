import './Cards.css';
import { cards } from '../../db/data'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Cards = () => {
  const { t, i18n } = useTranslation()
  return (
  <>
     <div className='container'>
     <div className="cards__context">
      <ul>
        <li>{t("all")}</li>
        <li>{t("ui")}</li>
        <li>{t("ux")}</li>
        <li>{t("product")}</li>
        <li>{t("articles")}</li>
        <li>{t("tutorial")}</li>
        <li>{t("news")}</li>
      </ul>
    </div>

    <div className="cards">
      {
         cards.map(card => (
            <div className="card" key={card.id}>
               <img className='card__img' src={card.img} alt="card" />
               <p className='card__data'>{card.data}</p>
               <h3 className='card__title'>{card[`title_${i18n.language}`]}</h3>
               <p className='card__description'>{card[`description_${i18n.language}`]}</p>
               <NavLink className='card__btn' to={`/SinglePage/${card.id}`}>
                 {card[`btn_${i18n.language}`]}
               </NavLink>
            </div>
         ))
        }
    </div>
     </div>
  </>
  )
}

export default Cards