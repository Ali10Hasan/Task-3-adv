import styles from "./Hero.module.css"
import StatsCard from "./StatsCard"
import SubContent from './SubContent'
const stats=[
  {number:"+7000",label:"Students Passed Out"},
  {number:"+37",label:"Awards & Recognitions"},
  {number:"+15",label:"Experience Educators"},
]
const HeroContent = () => {
  return (
    <div className={styles.RightContent}>
        <SubContent 
         subTitle="Welcome to Little Learners Academy"
         Title="Where Young Minds Blossom and"
         SpanTitle=" Dreams Take Flight."
         description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
        <div className={styles.StatsCardContainer}>
             {stats.map((item,index)=>{
              return(
                <StatsCard key={index} number={item.number} label={item.label}/>
              )
             })}
        </div>
       
    </div>
  )
}

export default HeroContent