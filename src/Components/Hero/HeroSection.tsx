import styles from "./Hero.module.css"
import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

const HeroSection = () => {
  return (
    <div className={styles.HeroContainer}>
        <div className={styles.HeroImage}>
            <HeroImage Image='/Task-2-adv/HeroImage.png'/>
        </div>
        <div className={styles.HeroContent}>
             <HeroContent/>
        </div>
       
    </div>
  )
}

export default HeroSection