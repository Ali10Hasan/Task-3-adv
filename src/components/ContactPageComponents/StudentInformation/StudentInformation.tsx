import "./StudentInformation.css";
import fbIcon from "../../../assets/icons/facebook.png";
import twitterIcon from "../../../assets/icons/twitter.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import downArrow from "../../../assets/icons/down-arrow.png";

import { FORM_FIELDS, PROGRAM_OPTIONS, SECTION_HEADERS } from "../../../constants/data";
import FormField from "../FormField/FormField";
import SectionHeader from "../../SharedComponents/SectionHeader/SectionHeader";

const StudentInformation = () => {
  return (
    <section className="contact-section wrapper m-section">
      <SectionHeader
        {...SECTION_HEADERS.contactHeader}
      />
      <div className="contact-container p-relative">
        <div className="social-tabs">
          <div className="social-tab-item"><img src={fbIcon} alt="Facebook" /></div>
          <div className="social-tab-item"><img src={twitterIcon} alt="Twitter" /></div>
          <div className="social-tab-item"><img src={linkedinIcon} alt="LinkedIn" /></div>
        </div>

        <form className="contact-form-grid" onSubmit={(event) => event.preventDefault()}>
          {FORM_FIELDS.map((field) => (
            <FormField key={field.name} {...field} />
          ))}

          <div className="input-group">
            <label htmlFor="program">Program of Interest</label>
            <select id="program" className="custom-select" style={{ backgroundImage: `url(${downArrow})` }}>
              <option value="">Select Program</option>
              {PROGRAM_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <FormField
            label="Message"
            name="message"
            type="textarea"
            placeholder="Enter your Message"
            isFullWidth={true}
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default StudentInformation;
