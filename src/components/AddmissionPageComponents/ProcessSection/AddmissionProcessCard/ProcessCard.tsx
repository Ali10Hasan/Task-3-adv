import type { ICardItem } from '../../../../types';
import './ProcessCard.css';

const ProcessCard = ({ title, description, icon }: ICardItem) => {
  return (
    <div className="process-card p-relative">
      <div className="process-card__icon-box center-flex">
        <div className='process-card__icon-box__number'>
          {icon}
        </div>
      </div>
      <h3 className="process-card__title">{title}</h3>
      <p className="process-card__description">{description}</p>
    </div>
  );
};

export default ProcessCard;

