import BenefitsSection from "../components/HomePageComponents/Benifits/BenifitSection/BenifitSection"
import FAQSection from "../components/HomePageComponents/FAQ/FAQ"
import Hero from "../components/HomePageComponents/Hero/Hero"
import NavigateSection from "../components/HomePageComponents/Navigates/NavigateSection/NavigateSection"
import OurTestimonials from "../components/HomePageComponents/OurTestimonials/OurTestimonials"
import { BENEFITS_DATA, FAQ_DATA, HERO_DATA, NAVIGATION_PAGES_DATA, SECTION_HEADERS, TESTIMONIALS_DATA, } from "../constants/data"

import heroImg from "../assets/imgs/HeroImage.webp"


const Home = () => {
  return (
    <>

      <Hero image={heroImg} {...HERO_DATA} />

      <BenefitsSection
        header={SECTION_HEADERS.benefits}
        benefits={BENEFITS_DATA}
      />

      <OurTestimonials
        header={SECTION_HEADERS.testimonials}
        testimonials={TESTIMONIALS_DATA}
      />


      <FAQSection
        header={SECTION_HEADERS.faq}
        faqData={FAQ_DATA}
      />

      <NavigateSection
        pages={NAVIGATION_PAGES_DATA}
      />
    </ >
  )
}

export default Home


