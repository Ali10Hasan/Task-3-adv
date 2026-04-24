import MotionWrapper from "../../../Animation/MotionWrapper"
import { SECTION_HEADERS, STUDENT_SUPPORT_DATA } from "../../../constants/data"
import BaseCardComponent from "../../SharedComponents/BaseCardComponent/BaseCardComponent"
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"

const StudentSupport = () => {
  return (
    <section className='student-support-section m-section wrapper '>
      <SectionHeader
        {...SECTION_HEADERS.StudentSupport}
      />

      <div className="grid">
        {STUDENT_SUPPORT_DATA.map((studentSupport, index) => (

          <MotionWrapper key={studentSupport.id} delay={index * 0.2} >

            <BaseCardComponent icon={studentSupport.icon} title={studentSupport.title} description={studentSupport.description} id={studentSupport.id} />
          </MotionWrapper>

        ))}
      </div>
    </section >
  )
}

export default StudentSupport

