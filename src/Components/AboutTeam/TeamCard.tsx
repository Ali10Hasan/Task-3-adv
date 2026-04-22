import styles from "./Team.module.css"
import React from 'react'
interface TeamCardProps {
    image: string;
    name: string;
    icone: string;
    textContent: string[];
}
const TeamCard = ({ image, name, icone, textContent }: TeamCardProps) => {
  return (
    <div className={styles.teamCard}>
        <div className={styles.teamCardHeader}>
            <div className={styles.personal}>
                <img src={image} className={styles.teamCardImage} />
                <h1>{name}</h1>
            </div>
            <img src={icone} className={styles.teamCardIcon} />
        </div>
            <div className={styles.teamBody}>
                {textContent.map((item,index)=>{
                    return(
                        <p key={index} className={`${index===0?styles.Qualification:styles.profileInfo}`}>{item}</p>
                    )
                })}
            </div>
    </div>
  )
}

export default TeamCard