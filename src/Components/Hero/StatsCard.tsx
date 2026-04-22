import styles from "./Hero.module.css"
interface StatsProps{
  number:string,
  label:string
}
const StatsCard = ({number,label}:StatsProps) => {
  return (
    <div className={styles.StatsContainer}>
      
        <div className={styles.DigitalStats}>
            {number}
        </div>
        <div className={styles.TextualStats}>
            {label}
        
      </div>
        
    </div>
  )
}

export default StatsCard