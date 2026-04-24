import MotionWrapper from "../../../Animation/MotionWrapper";
import { ADDITIONAL_SERVICES_DATA, FEES_DATA, SECTION_HEADERS } from "../../../constants/data"
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader"
import "./FeeStructure.css"

const FeeStructure = () => {
  return (
    <section className='fee-structure-section m-section wrapper'>
      <SectionHeader {...SECTION_HEADERS.FeeStructure} />


      <div className="grid-container">
        <div className="grid-header main-fees-grid">
          <div>Program</div>
          <div>Age Group</div>
          <div>Annual Tuition</div>
          <div>Registration Fee</div>
          <div>Activity Fee</div>
        </div>
        <MotionWrapper>
          <div className="grid-body">
            {FEES_DATA.map((fee) => (
              <div className="grid-row main-fees-grid" key={fee.id}>
                <div>{fee.program}</div>
                <div>{fee.ageGroup}</div>
                <div>{fee.annualTuition}</div>
                <div>{fee.registrationFee}</div>
                <div>{fee.activityFee}</div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>

      <div className="grid-container">
        <div className="additional-title-card">
          <h3>Additional Services</h3>
        </div>
        <MotionWrapper >
          <div className="grid-body">
            {ADDITIONAL_SERVICES_DATA.map((service) => (
              <div className="grid-row secondary-grid" key={service.id}>
                <div className="service-name">{service.service}</div>
                <div className="service-cost font-weight-bold">{service.cost}</div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FeeStructure;
