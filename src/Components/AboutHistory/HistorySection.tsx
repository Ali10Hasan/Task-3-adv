import IntroSection from "../Benefits/IntroSection"
import styles from "./History.module.css"
import HistoryDetails from "./HistoryDetails"

const historyData = [
  {
    icons:[
      "/Task-2-adv/Abstract Design.png",
      "/Task-2-adv/2023.png"
    ],
    title:"Resilience and Future Horizons",
    description:"Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
  },
  {
    icons:[
      "/Task-2-adv/Abstract Design.png",
      "/Task-2-adv/2017.png"
    ],
    title:"Innovation and Technology",
    description:"Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
  },
  {
    icons:[
      "/Task-2-adv/Abstract Design.png",
      "/Task-2-adv/2012.png"
    ],
    title:"Expansion and Recognition",
    description:"These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
  },
  {
    icons:[
      "/Task-2-adv/Abstract Design.png",
      "/Task-2-adv/2005.png"
    ],
    title:"Inception and Growth",
    description:"Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
  },
]
const HistorySection = () => {
  return (
    <div className={styles.historySection}>
        <IntroSection btnText="Our Progressive Journey" title="Our History" desription="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"/>
        <div className={styles.detailsContainer}>
          <div className={styles.Details}>
              {historyData.map((item,index)=>{
                  return <HistoryDetails key={index} icons={item.icons} title={item.title} description={item.description}/>
              })}
          </div>
              
        </div>
    </div>
  )
}

export default HistorySection