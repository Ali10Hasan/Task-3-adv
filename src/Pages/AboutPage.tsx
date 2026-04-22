import React from 'react'
import AboutHero from '../Components/AboutHero/AboutHero'
import MissionSection from '../Components/AboutMission/MissionSection'
import AwardsSecrion from '../Components/AboutAwards/AwardsSecrion'
import HistorySection from '../Components/AboutHistory/HistorySection'
import TeamSection from '../Components/AboutTeam/TeamSection'

const AboutPage = () => {
  return (
    <div>
        <AboutHero 
        image='/Task-2-adv/square.png'
        btnText="Overview"
        Title="Welcome to Little Learners Academy" 
        desc="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."/>
        <MissionSection/>
        <AwardsSecrion/>
        <HistorySection/>
        <TeamSection/>
    </div>
  )
}

export default AboutPage