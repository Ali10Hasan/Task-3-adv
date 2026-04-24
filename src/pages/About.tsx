import MisionVision from "../components/AboutPageComponents/MisionVision/MisionVision"
import OurAwards from "../components/AboutPageComponents/OurAwards/OurAwards"
import OurHistotySection from "../components/AboutPageComponents/OurHistoty/OurHistotySection/OurHistotySection"
import OurTeamMembers from "../components/AboutPageComponents/OurTeamMembers/OurTeamMembersSection/OurTeamMembers"
import PageHero from "../components/SharedComponents/PageHero/PageHero"
import { PAGE_HEROES_DATA } from "../constants/data"


const About = () => {

  return (
    <>
      <PageHero {...PAGE_HEROES_DATA.about} />

      <MisionVision />

      <OurAwards />

      <OurHistotySection />

      <OurTeamMembers />
    </>
  )
}

export default About
