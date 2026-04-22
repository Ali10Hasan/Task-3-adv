import IntroSection from "../Benefits/IntroSection"
import styles from "./Mission.module.css"
import MissionCard from "./MissionCard"
const MissionCardInfo=[
  {
    title:"Mission",
    icone:"/Task-2-adv/Mission1.png",
    desc:"At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
  },
  {
    title:"Vision",
    icone:"/Task-2-adv/Mission2.png",
    desc:"Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
  }
]
const MissionSection = () => {
  return (
    <div className={styles.MissionContainer}>
        <IntroSection btnText="Mission & Visions" title="Our Mission & Visions" desription="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."/>
        <div className={styles.MissionCards}>
            {MissionCardInfo.map((item,index)=>{
              return(
                  <MissionCard key={index} title={item.title} icone={item.icone} desc={item.desc}/>
              )
            })}
            
        </div>
        
    </div>
  )
}

export default MissionSection