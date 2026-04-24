import type { IHistory } from '../../../../types'
import './OurHistotyCard.css'
import vector from "../../../../assets/icons/abstract-history.png"
import CardVector from '../CardVector/CardVector'

const OurHistotyCard = ({ title, description, year, Last }: IHistory) => {
  return (
    <div className='history-card between-flex'>
      <div className="history-card__year">
        <div className={`vector-container ${Last ? 'hide-vertical' : ''}`}>
          <CardVector />
        </div>
        <img src={vector} />
        <h3>{year}</h3>
      </div>
      <div className="history-card__content">

        <div className="history-card__title">
          <h3>{title}</h3>
        </div>

        <div className="history-card__description">
          <p>{description}</p>
        </div>

      </div>
    </div>
  )
}

export default OurHistotyCard
