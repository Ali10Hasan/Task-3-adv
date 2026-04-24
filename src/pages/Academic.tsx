
import SpecialFeatures from "../components/AcademicPageComponents/OurSpecialFeaturesSection/SpecialFeatures"
import RoomsGalleryPage from "../components/AcademicPageComponents/RoomsGallerySection/RoomsGalleryPage"
import StudentLearnSection from "../components/AcademicPageComponents/StudentLearnSection/StudentLearnSection"
import PageHero from "../components/SharedComponents/PageHero/PageHero"
import { PAGE_HEROES_DATA } from "../constants/data"

const Academic = () => {
  return (
    <>
      <PageHero {...PAGE_HEROES_DATA.academics} />

      <SpecialFeatures />

      <StudentLearnSection />

      <RoomsGalleryPage />
    </>
  )
}

export default Academic
