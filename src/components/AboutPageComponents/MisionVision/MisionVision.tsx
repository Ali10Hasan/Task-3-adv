import { FadeIn } from '../../../Animation/FadeIn'
import { MISSION_VISION_DATA, SECTION_HEADERS } from '../../../constants/data'
import SectionHeader from '../../SharedComponents/SectionHeader/SectionHeader'
import MVCard from './MVCard/MVCard'



const MisionVision = () => {
  return (
    <section className='Mision-Vision-section m-section wrapper ' id='mission'>
      <div className="mision-header">
        <SectionHeader
          {...SECTION_HEADERS.MissionVision}
        />
      </div>

      <div className="grid-tow-col">
        {MISSION_VISION_DATA.map((card) => (
          <FadeIn>
            <MVCard
              id={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default MisionVision


