import IntroSection from "../Benefits/IntroSection"
import styles from "../Benefits/Benefits.module.css"
import BenefitsCard from "../Benefits/BenefitsCard"

export interface BenefitsCardType{
  icone:string,
  title:string,
  description:string,
  
}
const FeatureCardInfo:Array<BenefitsCardType>=[
  {
    icone:"/Task-2-adv/Feature1.png",
    title:"Thematic Learning",
    description:"Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
  },
  {
    icone:"/Task-2-adv/Feature2.png",
    title:"STEAM Education",
    description:"We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
  },
  {
    icone:"/Task-2-adv/Feature3.png",
    title:"Language Immersion",
    description:"Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness  fostering ."
  },
  {
    icone:"/Task-2-adv/Feature4.png",
    title:"Art and Creativity",
    description:"Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms"
  },
  {
    icone:"/Task-2-adv/Feature5.png",
    title:"Outdoor Education",
    description:"Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
  },
  {
    icone:"/Task-2-adv/Feature6.png",
    title:"Play-Based Learning",
    description:"Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
  },
]
const FeatureSection = () => {
  return (
    <div className={styles.featureSection}>
       <div className={styles.BenefitsContainer}>
         <IntroSection 
        btnText="Our Features"
         title="Our Special Features" 
         desription="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
       <div className={styles.BenefitsCardContainer} >
            
                
                    {FeatureCardInfo.map((item,index)=>{
                        return(
                          <BenefitsCard key={index} icone={item.icone} title={item.title} description={item.description}/>
                        )
                    })}
                
            
        </div>
        </div>
    </div>
  )
}

export default FeatureSection