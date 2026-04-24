import type { ICardItem } from "../../../../types"
import './MVCard.css'


const MVCard = ({ title, description, icon }: ICardItem) => {
  return (
    <div className="mission-vision-card">
      <div className="mission-vision-card__header between-flex">
        <div className="mission-vission-card__title">
          <h3>{title}</h3>
        </div>
        <div className="mission-vision-card__icon-box">
          <img src={icon} alt={title} />
        </div>
      </div>
      <p className="mission-vision-card__description">
        {description}
      </p>
    </div>
  )
}
export default MVCard
