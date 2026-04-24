
import FeeStructure from "../components/AddmissionPageComponents/FeeStructureSection/FeeStructure"
import AddmissionProcessSection from "../components/AddmissionPageComponents/ProcessSection/ProcessSection"
import PageHero from "../components/SharedComponents/PageHero/PageHero"
import { PAGE_HEROES_DATA } from "../constants/data"


const Admissions = () => {
  return (
    <div >
      <PageHero {...PAGE_HEROES_DATA.admissions} />

      <AddmissionProcessSection />

      <FeeStructure />

    </div>
  )
}

export default Admissions
