import type { ITeam } from '../../../../types'
import './OurTeamMemberCard.css'
import envlope from '../../../../assets/icons/team-envlope.png'
const OurTeamMemberCard = ({ name, img, qualification, description }: ITeam) => {
  return (
    <div className='member-card'>
      <div className="member-card__header">
        <div className="member-card__header__img">
          <img src={img} alt={name} />
        </div>
        <div className="member-card__header__name">
          <h3>{name}</h3>
          <div className="member-card__header__envlope center-flex">
            <img src={envlope} alt="" />
          </div>
        </div>
      </div>
      <div className="member-card__about">
        <h3>{qualification}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default OurTeamMemberCard



