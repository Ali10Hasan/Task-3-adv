import MotionWrapper from "../../../Animation/MotionWrapper"
import { SECTION_HEADERS, STUDENT_LEARN_DATA } from "../../../constants/data"

import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"
import SharedCard from "../../SharedComponents/SharedCard/SharedCard"
import "./StudentLearnSection.css"
const StudentLearnSection = () => {
  return (
    <section className='student-learn-section alt-gap m-section wrapper '>
      <SectionHeader {...SECTION_HEADERS.StudentLearn} />

      <div className="grid">

        {STUDENT_LEARN_DATA.map((learn) => (
          <MotionWrapper key={learn.id} delay={learn.id * 0.2} >

            <SharedCard
              key={learn.id}
              title={learn.title}
              description={learn.description}
              img={learn.img}
              className="learn__background"
            />
          </MotionWrapper>

        ))}
      </div>
    </section>
  )
}

export default StudentLearnSection
