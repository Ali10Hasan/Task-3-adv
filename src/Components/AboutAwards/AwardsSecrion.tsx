import IntroSection from "../Benefits/IntroSection"
import styles from "./Award.module.css"
import AwardSlider from "./AwardSlider"
const AwardsSecrion = () => {
  return (
    <div className={styles.AwardsContainer}>
        <IntroSection btnText="Our Achievements" title="Our Awards and Recognitions" desription="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."/>
        <AwardSlider/>
    </div>
  )
}

export default AwardsSecrion