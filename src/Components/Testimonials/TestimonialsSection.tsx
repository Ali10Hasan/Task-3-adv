import IntroSection from "../Benefits/IntroSection";
import styles from "./Testimonials.module.css";
import TestimonialsSlider from "./TestimonialsSlider";
const TestimonialsSection = () => {
  return (
    <div className={styles.TestimonialsContainer}>
        <IntroSection
        btnText="Their Happy Words 🤗"
        title="Our Testimonials"
        desription="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        />

        <div className={styles.SliderContainer} >

               <TestimonialsSlider/>
               
        </div>
     
    </div>
  )
}

export default TestimonialsSection