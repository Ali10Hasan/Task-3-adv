import { useState } from "react"
import IntroSection from "../Benefits/IntroSection"
import styles from "./Rooms.module.css"
import RoomsCard from "./RoomsCard"
interface CardDataInterface{
    images:string[],
    roomFilter:string,
    desc:string
}

const FilterElements=["All","Classrooms","Library","Science Lab","Computer Lab","Garden and Nature Area"]
const CardData: CardDataInterface[] = [
    {
        images:[
            "/Task-2-adv/GroupImage1/Image.png",
            "/Task-2-adv/GroupImage1/Image (1).png",
            "/Task-2-adv/GroupImage1/Image (2).png",
            "/Task-2-adv/GroupImage1/Image (3).png",
            "/Task-2-adv/GroupImage1/Image (2).png",
            "/Task-2-adv/GroupImage1/Image (3).png",
            "/Task-2-adv/GroupImage1/Image (1).png",
        ],
        roomFilter: "Classrooms",
        desc: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    },
    {
        images:[
            "/Task-2-adv/GroupImage2/Image.png",
            "/Task-2-adv/GroupImage2/Image (1).png",
            "/Task-2-adv/GroupImage2/Image (2).png",
            "/Task-2-adv/GroupImage2/Image (3).png",
            "/Task-2-adv/GroupImage2/Image (2).png",
            "/Task-2-adv/GroupImage2/Image (3).png",
            "/Task-2-adv/GroupImage2/Image (1).png",
        ],
        roomFilter: "Library",
        desc: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    },
    {
        images:[
            "/Task-2-adv/GroupImage3/Image.png",
            "/Task-2-adv/GroupImage3/Image (1).png",
            "/Task-2-adv/GroupImage3/Image (2).png",
            "/Task-2-adv/GroupImage3/Image (3).png",
            "/Task-2-adv/GroupImage3/Image (2).png",
            "/Task-2-adv/GroupImage3/Image (3).png",
            "/Task-2-adv/GroupImage3/Image (1).png",

        ],
        roomFilter: "Computer Lab",
        desc: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    },
    {
        images:[
            "/Task-2-adv/GroupImage4/Image.png",
            "/Task-2-adv/GroupImage4/Image (1).png",
            "/Task-2-adv/GroupImage4/Image (2).png",
            "/Task-2-adv/GroupImage4/Image (3).png",
            "/Task-2-adv/GroupImage4/Image (2).png",
            "/Task-2-adv/GroupImage4/Image (3).png",
            "/Task-2-adv/GroupImage4/Image (1).png",
            "/Task-2-adv/GroupImage4/Image (1).png",
        ],
        roomFilter: "Science Lab",
        desc: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    },
    {
        images:[
            "/Task-2-adv/GroupImage5/Image.png",
            "/Task-2-adv/GroupImage5/Image (1).png",
            "/Task-2-adv/GroupImage5/Image (2).png",
            "/Task-2-adv/GroupImage5/Image (3).png",
            "/Task-2-adv/GroupImage5/Image (2).png",
            "/Task-2-adv/GroupImage5/Image (3).png",
            "/Task-2-adv/GroupImage5/Image (1).png",
        ],
        roomFilter: "Garden and Nature Area",
        desc: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    },
]

const RoomsSection = () => {
    const [filterCardData, setFilterCardData] = useState<CardDataInterface[]>(CardData)
    const [show ,setShow]=useState<number>(0)
    const FilterByLocation = (location: string) => {
        if (location === "All") {
            setFilterCardData(CardData)
            return
        }
        setFilterCardData(CardData.filter((card) => card.roomFilter === location))
    }
    
  
 return (
    <div className={styles.roomsSection}>
        <IntroSection 
         btnText="Our Gallery"
         title="Our Rooms Gallery" 
         desription="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>

        <div className={styles.FilterButton }>
            {FilterElements.map((element,index)=>{
            return <button 
            className={show === index ? styles.active : ""} key={index} onClick={()=>{
            FilterByLocation(element)
            setShow(index)    
        }} 
        
        >{element}</button>
        })}
        </div>
        
        <div className={styles.FilterCards}>
            {filterCardData.map((card,index)=>{
                return <RoomsCard 
                key={index}
                images={card.images}
                roomFilter={card.roomFilter}
                description={card.desc}
                />
            })}
        </div>

    </div>
  )
}

export default RoomsSection
