import { useState } from "react";
import styles from "./Testimonials.module.css";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsCardInfo = [
  {
    image: "/Task-2-adv/Profile Container1.png",
    name: "Jennifer B",
    stars: "/Task-2-adv/evalution.png",
    paragraph:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    image: "/Task-2-adv/Profile Container2.png",
    name: "David K",
    stars: "/Task-2-adv/evalution.png",
    paragraph:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    image: "/Task-2-adv/Profile Container3.png",
    name: "Emily L",
    stars: "/Task-2-adv/evalution.png",
    paragraph:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    image: "/Task-2-adv/Profile Container2.png",
    name: "Ali H",
    stars: "/Task-2-adv/evalution.png",
    paragraph:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    image: "/Task-2-adv/Profile Container3.png",
    name: "Lojen L",
    stars: "/Task-2-adv/evalution.png",
    paragraph:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let visibleCards = 3;
  let moveSize = 380;

  if (window.innerWidth <= 480) {
    visibleCards = 1;
    moveSize = 316;
  } else if (window.innerWidth <= 768) {
    visibleCards = 1;
    moveSize = 360;
  } else if (window.innerWidth <= 1200) {
    visibleCards = 2;
    moveSize = 380;
  }

  const onNext = () => {
    if (currentIndex < TestimonialsCardInfo.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }else{
      setCurrentIndex(0)
    }
  };

  const onBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }else{
      setCurrentIndex(TestimonialsCardInfo.length-visibleCards)
    }
  };

  return (
    <div className={styles.SliderContainer}>
      <button
        style={{
          border: "0px",
          cursor: "pointer",
          marginRight: "6px",
          background: "transparent",
        }}
      
        onClick={onBack}
      >
        <img src="/Task-2-adv/leftArrow.png" alt="Previous" />
      </button>

      <div className={styles.SliderWindow}>
        <div
          className={styles.SliderTrack}
          style={{ transform: `translateX(-${currentIndex * moveSize}px)` }}
        >
          {TestimonialsCardInfo.map((item, index) => {
            return (
              <TestimonialsCard
                key={index}
                image={item.image}
                name={item.name}
                stars={item.stars}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>
      </div>

      <button
        style={{
          border: "0px",
          cursor: "pointer",
          marginLeft: "6px",
          background: "transparent",
        }}
       
        onClick={onNext}
      >
        <img src="/Task-2-adv/rightArrow.png" alt="Next" />
      </button>
    </div>
  );
};

export default TestimonialsSlider;