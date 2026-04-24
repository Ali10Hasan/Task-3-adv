import { Link } from 'react-router-dom';
import CardDivider from '../CardDivider/CardDivider';
import './NavigateCard.css';
import brArrow from "../../../../assets/icons/brArrow.png"
import type { INavigationPage } from '../../../../types';

const NavigateCard = ({ title, description, link }: INavigationPage) => {
  return (
    <div className="navigate-card">
      <h3 className="navigate-card__title">{title}</h3>

      <CardDivider />
      <p className="navigate-card__description">{description}</p>

      <div className='link-container'>
        <Link to={link} className="navigate-link">
          Learn More
          <span className="arrow between-flex">
            <img src={brArrow} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavigateCard;
