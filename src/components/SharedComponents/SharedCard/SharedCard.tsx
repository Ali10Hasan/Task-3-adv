import type { ISharedCardProps } from "../../../types";
import "./SharedCard.css";



const SharedCard = ({ title, description, img, icon, className = "" }: ISharedCardProps) => {
  return (
    <div className={`shared-card center-flex ${className}`}>
      <div className="shared-card__media">
        {img &&
          <img src={img} alt={title} className="card-image" />}
        {icon &&
          <div className="card-icon-wrapper">
            <img src={icon} alt={title} />
          </div>}
      </div>

      <div className="shared-card__content">
        <h3 className="shared-card__title">{title}</h3>
        <p className="shared-card__description">{description}</p>
      </div>
    </div >
  );
};

export default SharedCard;
