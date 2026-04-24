import MotionWrapper from "../../../Animation/MotionWrapper"
import { EXTRACURRICULAR_ACTIVITIES_DATA, SECTION_HEADERS } from "../../../constants/data"
import BaseCardComponent from "../../SharedComponents/BaseCardComponent/BaseCardComponent"
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"

const Extracurricular = () => {
  return (
    <section className='extracurricular-section m-section wrapper '>
      <SectionHeader
        {...SECTION_HEADERS.Extracurricular}
      />

      <div className="grid">
        {EXTRACURRICULAR_ACTIVITIES_DATA.map((extra, index) => (

          <MotionWrapper key={extra.id} delay={index * 0.2} >

            <BaseCardComponent
              icon={extra.icon}
              title={extra.title}
              description={extra.description}
              id={extra.id} />
          </MotionWrapper>

        ))}
      </div>
    </section >
  )
}

export default Extracurricular

