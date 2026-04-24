import MotionWrapper from "../../../Animation/MotionWrapper"
import { SECTION_HEADERS, SPECIAL_FEATURES_DATA } from "../../../constants/data"
import BaseCardComponent from "../../SharedComponents/BaseCardComponent/BaseCardComponent"
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"
const SpecialFeatures = () => {
  return (
    <section className='Special-feature-section m-section wrapper' id="specialFeatures">

      <SectionHeader {...SECTION_HEADERS.SpecialFeature} />

      <div className="grid">
        {SPECIAL_FEATURES_DATA.map((feature, index) => (

          <MotionWrapper key={feature.id} delay={index * 0.2} >

            <BaseCardComponent
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon} />
          </MotionWrapper>

        ))}
      </div>
    </section >
  )
}

export default SpecialFeatures
