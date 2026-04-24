import { FadeIn } from "../../../../Animation/FadeIn"
import { OUR_HISTORY_DATA, SECTION_HEADERS } from "../../../../constants/data"
import SectionHeader from "../../../SharedComponents/SectionHeader/SectionHeader"
import OurHistotyCard from "../OurHistotyCard/OurHistotyCard"
import "./OurHistotySection.css"

const OurHistotySection = () => {
  return (
    <section className="our-history-section m-section wrapper" id="history">
      <div className="history-header">
        <SectionHeader {...SECTION_HEADERS.OurHistory} />
      </div>

      <div className="our-history">
        <FadeIn>
          {OUR_HISTORY_DATA.map((card, index) => (
            <FadeIn key={card.id}>
              <OurHistotyCard
                title={card.title}
                description={card.description}
                year={card.year}
                Last={index === OUR_HISTORY_DATA.length - 1}
                id={0}
              />
            </FadeIn>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}

export default OurHistotySection

