import MotionWrapper from "../../../Animation/MotionWrapper"
import { EVENTS_CELEB_DATA, SECTION_HEADERS } from "../../../constants/data"
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"
import SharedCard from "../../SharedComponents/SharedCard/SharedCard"
import "./EventSection.css"

const Events = () => {
  return (
    <section className='events-section alt-gap m-section wrapper '>
      <SectionHeader {...SECTION_HEADERS.Events} />

      <div className="grid">
        {EVENTS_CELEB_DATA.map((celeb, index) => (

          <MotionWrapper key={celeb.id} delay={index * 0.2} >

            <SharedCard
              img={celeb.img}
              title={celeb.title}
              description={celeb.description}
              className="event__background"
            />
          </MotionWrapper>

        ))}
      </div>
    </section >
  )
}

export default Events
