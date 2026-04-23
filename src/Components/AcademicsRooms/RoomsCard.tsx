import { useState } from "react";
import styles from "./Rooms.module.css"
interface RoomsCardProps{
    images:string[],
    roomFilter:string,
    description:string
}
const RoomsCard = ({images,roomFilter,description}:RoomsCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    
    let visibleCards=4;
    let moveSize=310;
     if (window.innerWidth <= 768) {
    visibleCards = 1;
    moveSize = 350;
  }
    const onNext=()=>{
        if(currentImageIndex< images.length-4){
            setCurrentImageIndex((prev)=>prev+1)
        }else{
            setCurrentImageIndex(0)
        }
        
    }
    const onBack=()=>{
        if(currentImageIndex>0){
        setCurrentImageIndex((prev)=>prev-1)}
        else{
            setCurrentImageIndex(images.length-visibleCards)
        }
    }
  return (
    <div className={styles.RoomCard}>
            <div className={styles.RoomWindowImages}>
                {images.map((image,index)=>{
                    return <div key={index} className={styles.image} style={{transform: `translateX(-${currentImageIndex * moveSize}px)`}}><img key={index} src={image} /></div>
                })}
            </div>
            <div className={styles.RoomCardContent}>
                <div className={styles.roomFilter}>
                    <h2>{roomFilter}</h2>
                    <div className={styles.ArrowBtn}>
                        <img src="/Task-3-adv/leftArrow.png" alt="" onClick={onBack} />
                        <img src="/Task-3-adv/rightArrow.png" alt="" onClick={onNext} />
                    </div>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                
            </div>
    </div>
  )
}

export default RoomsCard