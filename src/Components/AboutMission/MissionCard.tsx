import styles from "./Mission.module.css"

interface MissionCardProps{
    title:string,
    icone:string,
    desc:string
}
const MissionCard = ({title,icone,desc}:MissionCardProps) => {
  return (
    <div className={styles.MissionCard}>
        <div className={styles.HeadCard}>
            <h1>{title}</h1>
            <img src={icone} alt="" />
        </div>
        <div className={styles.BodyCard}>
            {desc}
        </div>
    </div>
  )
}

export default MissionCard