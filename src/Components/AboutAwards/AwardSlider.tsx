import { useMemo, useState } from "react";
import styles from "./Award.module.css";
import AwardCard from "./AwardCard";

const AwardSliderInfo = [
  {
    icone: "/Task-3-adv/SliderIcone3.png",
    title: "Environmental Stewardship Award",
    desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icone: "/Task-3-adv/SliderIcone2.png",
    title: "Innovative STEAM Education Award",
    desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM programs that ignite creativity and critical thinking in young learners.",
  },
  {
    icone: "/Task-3-adv/SliderIcone1.png",
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    icone: "/Task-3-adv/SliderIcone1.png",
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    icone: "/Task-3-adv/SliderIcone1.png",
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    icone: "/Task-3-adv/SliderIcone1.png",
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    icone: "/Task-3-adv/SliderIcone1.png",
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    icone: "/Task-3-adv/SliderIcone1.png",
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

let CARD_WIDTH = 460;


const AwardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let visibleCards = 3;
    if (window.innerWidth <= 768){
        CARD_WIDTH=260;
        visibleCards= 2;
    } 
    if (window.innerWidth <= 1200){
        CARD_WIDTH=358;
        visibleCards= 2;
    } 
    if(window.innerWidth<=1550){
        CARD_WIDTH=390;
        visibleCards= 3;
    }
    
  

  const maxIndex = AwardSliderInfo.length - visibleCards;
  const moveSize = CARD_WIDTH;

  const onNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const onBack = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className={styles.AwardSliderContainer}>
      <div className={styles.SliderWindow}>
        <div
          className={styles.SliderTrack}
          style={{ transform: `translateX(-${currentIndex * moveSize}px)` }}
        >
          {AwardSliderInfo.map((item, index) => (
            <AwardCard
              key={index}
              icone={item.icone}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      <div className={styles.btn}>
        <img onClick={onBack} src="/Task-3-adv/leftArrow.png" alt="Previous" />
        <img onClick={onNext} src="/Task-3-adv/rightArrow.png" alt="Next" />
      </div>
    </div>
  );
};

export default AwardSlider;