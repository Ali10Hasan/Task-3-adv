import styles from "./Hero.module.css"
interface Image{
  Image:string
}
const HeroImage = ({Image}:Image) => {
  return (
    <div className={styles.ImageContainer}>
        <div className={styles.image}>
            <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default HeroImage