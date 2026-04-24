import MotionWrapper from '../../../Animation/MotionWrapper';
import { OUR_AWARDS_DATA, SECTION_HEADERS } from '../../../constants/data';
import BaseCardComponent from '../../SharedComponents/BaseCardComponent/BaseCardComponent';
import SectionHeader from '../../SharedComponents/SectionHeader/SectionHeader';
import Slider from '../../Slider/Slider';
import "./OurAwards.css";

const OurAwards = () => {
  return (
    <section className="our-awards-section wrapper m-section" id="awards">
      <SectionHeader
        {...SECTION_HEADERS.Awards}
      />

      <Slider
        data={OUR_AWARDS_DATA}
        itemsVisible={3}
        other={OUR_AWARDS_DATA.length - 3}
        renderItem={(award) => (
          <MotionWrapper key={award.id}>
            <BaseCardComponent
              id={award.id}
              title={award.title}
              description={award.description}
              icon={award.icon}
            />
          </MotionWrapper>
        )}
      />
    </section>
  );
};

export default OurAwards;
