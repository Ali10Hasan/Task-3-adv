import { FadeIn } from "../../../../Animation/FadeIn"
import { OUR_TEAM_DATA, SECTION_HEADERS } from "../../../../constants/data"
import SectionHeader from "../../../SharedComponents/SectionHeader/SectionHeader"
import OurTeamMemberCard from "../OurTeamMemberCard/OurTeamMemberCard"
import "./OurTeamMembers.css"

const OurTeamMembers = () => {
  return (
    <section className="team-members-section m-section wrapper" id="teachers">
      <div className="team-members-header">
        <SectionHeader {...SECTION_HEADERS.TeamMembers} />

        <div className="grid-tow-col">
          {OUR_TEAM_DATA.map((card) => (
            <FadeIn>
              <OurTeamMemberCard
                key={card.id} id={card.id} name={card.name} img={card.img} qualification={card.qualification} description={card.description} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeamMembers
