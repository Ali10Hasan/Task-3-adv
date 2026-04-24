import type { ICardItem } from '../../../types';
import './BaseCardComponent.css';

const BaseCardComponent = ({ title, description, icon }: ICardItem) => {
  return (
    <div className="base-card p-relative">
      <div className="base-card__icon-box center-flex">
        <img src={icon} alt={title} />
      </div>
      <h3 className="base-card__title">{title}</h3>
      <p className="base-card__description">{description}</p>
    </div>
  );
};

export default BaseCardComponent;

