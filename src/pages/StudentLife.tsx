import PageHero from "../components/SharedComponents/PageHero/PageHero"
import Events from "../components/StudentsLifeComponents/EventsSection/Events"
import Extracurricular from "../components/StudentsLifeComponents/ExtracurricularSection/Extracurricular"
import StudentSupport from "../components/StudentsLifeComponents/StudentSupportSection/StudentSupport"
import { PAGE_HEROES_DATA } from "../constants/data"

const StudentLife = () => {
  return (
    <div >
      <PageHero {...PAGE_HEROES_DATA.studentlife} />

      <Extracurricular />
      <Events />
      <StudentSupport />

    </div>

  )
}

export default StudentLife
