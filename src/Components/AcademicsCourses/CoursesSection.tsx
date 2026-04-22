import IntroSection from "../Benefits/IntroSection"
import CouesesCard from "./CouesesCard"
import styles from "./Courses.module.css"

const CoursesCardInfo=[
    {
        image:"/Task-3-adv/Courses1.png",
        title:"Language Arts",
        desc:"Reading, writing, storytelling, and communication skills."
    },
    {
        image:"/Task-3-adv/Courses2.png",
        title:"Mathematics",
        desc:"Number sense, basic operations, problem-solving, and logic."
    },
    {
        image:"/Task-3-adv/Courses3.png",
        title:"Science",
        desc:"Exploring the natural world through hands-on experiments and investigations."
    },
    {
        image:"/Task-3-adv/Courses4.png",
        title:"Social Studies",
        desc:"Cultivating an understanding of diverse cultures and communities."
    },
    {
        image:"/Task-3-adv/Courses5.png",
        title:"Arts and Crafts",
        desc:"Encouraging creativity through various art forms and crafts."
    },
    {
        image:"/Task-3-adv/Courses6.png",
        title:"Physical Education",
        desc:"Promoting physical fitness, coordination, and teamwork."
    },
]
const CoursesSection = () => {
  return (
    <div className={styles.coursesSection}>
        <IntroSection
         btnText="Our Features"
         title="What Students Learn" 
         desription="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        />
        <div className={styles.coursesCards}>
            {CoursesCardInfo.map((card, index) => (
                <CouesesCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    desc={card.desc}
                />
            ))}
        </div>
        
    </div>
  )
}

export default CoursesSection