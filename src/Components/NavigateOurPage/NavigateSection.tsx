import IntroSection from "../Benefits/IntroSection"
import styles from "./Navigate.module.css"
import NavigateCard from "./NavigateCard"
type NavigateType={
  title:string,
  desc:string,
  btnText:string
}
const NavigateData:NavigateType[]=[
  {
    title:"About Us",
    desc:"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    btnText:"Learn More",
  },
  {
    title:"Academics",
    desc:"Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    btnText:"Learn More",
  },
  {
    title:"Student Life",
    desc:"Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    btnText:"Learn More",
  },
  {
    title:"Admissions",
    desc:"Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    btnText :"Learn More",
  },
]
const NavigateSection = () => {
  return (
    <div className={styles.NavigateContainer}>
        <IntroSection 
        btnText="Explore More" 
        title="Navigate through our Pages" 
        desription="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"/>
    
        <div className={styles.NavigateCards}>
              {NavigateData.map((item,index)=>{
                  return(
                    <NavigateCard key={index} title={item.title} description={item.desc} btnText={item.btnText}/>
                  )
              })}
        </div>
    
    
    </div>
  )
}

export default NavigateSection