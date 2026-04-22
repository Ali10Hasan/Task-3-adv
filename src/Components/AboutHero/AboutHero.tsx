import styles from "./AboutHero.module.css"
interface AboutHeroProps{
    image:string,
    btnText:string,
    Title:string,
    desc:string
}
const AboutHero = ({image,btnText,Title,desc}:AboutHeroProps) => {
  return (
    <div className={styles.AboutHeroContaier}>

        <img src={image} alt="" />
        <div className={styles.HeroContent}>
             <div className={styles.Title}>
        <button>{btnText}</button>
        <p>{Title}</p>
        </div>
        
        <div className={styles.desription}>
            {desc}
        </div>
        </div>
       
    </div>
  )
}

export default AboutHero