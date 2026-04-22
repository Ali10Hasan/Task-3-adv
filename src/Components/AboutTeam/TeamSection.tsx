import IntroSection from "../Benefits/IntroSection"
import styles from "./Team.module.css"
import TeamCard from "./TeamCard"
const OurTeamData=[
    {
        image:"/Task-2-adv/member1.png",
        name:"Ms. Sarah Anderson",
        icone:"/Task-2-adv/TeamIcon.png",
        textContent:[
            "Qualification:Bachelor's Degree in Early Childhood Education",
            "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
        ]
    },
    {
        image:"/Task-2-adv/member2.png",
        name:"Mr. David Roberts",
        icone:"/Task-2-adv/TeamIcon.png",
        textContent:[
            "Qualification: Master's Degree in Elementary Education",
            "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
        ]
    },
    {
        image:"/Task-2-adv/member3.png",
        name:"Ms. Emily Hernandez",
        icone:"/Task-2-adv/TeamIcon.png",
        textContent:[
            "Qualification: Diploma in Child Psychology",
            "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
        ]
    },
    {
        image:"/Task-2-adv/member4.png",
        name:"Mr. Michael Turner",
        icone:"/Task-2-adv/TeamIcon.png",
        textContent:[
            "Qualification: Diploma in Child Psychology",
            "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
        ]
    },
    {
        image:"/Task-2-adv/member5.png",
        name:"Ms. Jessica Lee",
        icone:"/Task-2-adv/TeamIcon.png",
        textContent:[
            "Qualification: Master's Degree in Special Education",
            "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
        ]
    },
    {
        image:"/Task-2-adv/member6.png",
        name:"Mr. William Parker",
        icone:"/Task-2-adv/TeamIcon.png",
        textContent:[
            "Qualification: Bachelor's Degree in Fine Arts",
            "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
        ]
    },
]
const TeamSection = () => {
  return (
    <div className={styles.teamSection}>
            <IntroSection btnText="Our Teachers With Experties" title="Our Team Members" desription="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."/>
            <div className={styles.teamCardsContainer}>
                    {OurTeamData.map((item,index)=>{
                      return  <TeamCard key={index} image={item.image} name={item.name} icone={item.icone} textContent={item.textContent}/>
                    })}
            </div>
    </div>
  )
}

export default TeamSection