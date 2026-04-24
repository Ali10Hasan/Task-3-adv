import StudentInformation from "../components/ContactPageComponents/StudentInformation/StudentInformation"
import PageHero from "../components/SharedComponents/PageHero/PageHero"
import { PAGE_HEROES_DATA } from "../constants/data"


const Contact = () => {
  return (
    <>
      <PageHero {...PAGE_HEROES_DATA.contact} />


      <StudentInformation />
    </>
  )
}

export default Contact
