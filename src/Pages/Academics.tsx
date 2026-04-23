
import AboutHero from '../Components/AboutHero/AboutHero'
import FeatureSection from '../Components/AcademicsFeature/FeatureSection'
import CoursesSection from '../Components/AcademicsCourses/CoursesSection'
import RoomsSection from '../Components/AcademicsRooms/RoomsSection'

const Academics = () => {
  return (
    <div>
        <AboutHero  
        image='/Task-3-adv/square.png'
        btnText="Academics" Title="Nurturing Young Minds for Success"
        desc="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."/>
    
        <FeatureSection/>
        <CoursesSection/>
        <RoomsSection/>
    </div>
  )
}

export default Academics