import styles from "./Benefits.module.css"
interface IntroSectionProps{
    btnText:string,
    title:string,
    desription:string,
   
}
const IntroSection = ({btnText,title,desription}:IntroSectionProps) => {
  return (
    <div className={styles.IntroSection}>
        <button className={styles.IntroBtn}>{btnText}</button>
        <p className={styles.IntroTitle}>{title}</p>
        <p className={styles.IntroDesc}>{desription}</p>
    </div>
  )
}

export default IntroSection