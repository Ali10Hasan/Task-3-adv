import BenefitsSection from "../Components/Benefits/BenefitsSection"
import FooterSection from "../Components/Contact/FooterSection"
import FrequentlySection from "../Components/FrequentlyAsked/FrequentlySection"
import HeroSection from "../Components/Hero/HeroSection"
import NavigateSection from "../Components/NavigateOurPage/NavigateSection"
import TestimonialsSection from "../Components/Testimonials/TestimonialsSection"
import styles from "./LandingPage.module.css"
const HomePage = () => {
  return (
    <div className={styles.Container}>
         
        <main>
            <HeroSection/>
            <BenefitsSection/>
            <TestimonialsSection/>
            <FrequentlySection/>
            <NavigateSection/>
        </main>
       
    </div>
  )
}

export default HomePage