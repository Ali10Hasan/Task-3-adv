import MotionWrapper from "../../../Animation/MotionWrapper"
import { ADDMISSION_PROCESS_DATA, SECTION_HEADERS } from "../../../constants/data"

import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"
import ProcessCard from "./AddmissionProcessCard/ProcessCard"
import './ProcessSection.css'

const AddmissionProcessSection = () => {
  return (
    <section className='addmision-process-section m-section wrapper '>
      <SectionHeader {...SECTION_HEADERS.AdmissionProcess} />
      {<div className="grid addmission-process">
        {ADDMISSION_PROCESS_DATA.map((process, index) => (

          <MotionWrapper key={process.id} delay={index * 0.2}   >
            <ProcessCard id={process.id} title={process.title} description={process.description} icon={process.icon} />

          </MotionWrapper>

        ))}
      </div>}
    </section >
  )
}

export default AddmissionProcessSection


