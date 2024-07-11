import { useParams } from 'react-router-dom';
import { singlePage } from '../db/data';
import { useTranslation } from 'react-i18next';
import './SinglePage.css';

const SinglePage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const card = singlePage.find(card => card.id === Number(id));


  return (
    <div className="container">
      <div className='singlePage'>
        <img className='singlePage__img' src={card.img} alt={card[`title_${i18n.language}`]} />
        <div className='singlePage__contant'>
          <h1 className='singlePage__title'>{card[`title_${i18n.language}`]}</h1>
          <p className='singlePage__description'>{card[`description_${i18n.language}`]}</p>
        </div>
        <div className='singlePage__contant'>
          <h2 className='singlePage__title'>{card[`titleH2_${i18n.language}`]}</h2>
          <p className='singlePage__description'>{card[`description_${i18n.language}`]}</p>
        </div>
        <div className='singlePage__contant'>
          <h3 className='singlePage__title'>{card[`titleH3_${i18n.language}`]}</h3>
          <p className='singlePage__description'>{card[`description_${i18n.language}`]}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;