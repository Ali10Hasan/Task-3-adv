import BenefitsCard from "./BenefitsCard"
import IntroSection from "./IntroSection"
import styles from "./Benefits.module.css"
export interface BenefitsCardType{
  icone:string,
  title:string,
  description:string,
  
}
const BenefitsCardInfo:Array<BenefitsCardType>=[
  {
    icone:"/Task-2-adv/IconeBenefit1.png",
    title:"Holistic Learning Approach",
    description:"Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
  },
  {
    icone:"/Task-2-adv/IconeBenefit2.png",
    title:"Experienced Educators",
    description:"Our passionate and qualified teachers create a supportive and stimulating learning environment."
  },
  {
    icone:"/Task-2-adv/IconeBenefit3.png",
    title:"Nurturing Environment",
    description:"We prioritize safety and provide a warm and caring atmosphere for every child."
  },
  {
    icone:"/Task-2-adv/IconeBenefit4.png",
    title:"Play-Based Learning",
    description:"We believe in the power of play to foster creativity, problem-solving skills, and imagination."
  },
  {
    icone:"/Task-2-adv/IconeBenefit5.png",
    title:"Individualized Attention",
    description:"Our small class sizes enable personalized attention, catering to each child's unique needs."
  },
  {
    icone:"/Task-2-adv/IconeBenefit6.png",
    title:"Parent Involvement",
    description:"We foster a strong parent-school partnership to ensure seamless communication and collaboration."
  },
]
const BenefitsSection = () => {
  return (
    <div>
        <div className={styles.BenefitsContainer}>
        <IntroSection 
        btnText="Children Deserve Bright Future"
         title="Our Benefits" 
         desription="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."/>
        <div className={styles.BenefitsCardContainer} >
            
                
                    {BenefitsCardInfo.map((item,index)=>{
                        return(
                          <BenefitsCard key={index} icone={item.icone} title={item.title} description={item.description}/>
                        )
                    })}
                
            
        </div>
        
        </div>
        
    </div>
  )
}

export default BenefitsSection