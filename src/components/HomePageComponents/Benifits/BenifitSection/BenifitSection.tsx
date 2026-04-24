import MotionWrapper from '../../../../Animation/MotionWrapper';
import { SECTION_HEADERS } from '../../../../constants/data';
import type { BenefitsSectionProps } from '../../../../types';
import BaseCardComponent from '../../../SharedComponents/BaseCardComponent/BaseCardComponent';
import SectionHeader from '../../../SharedComponents/SectionHeader/SectionHeader';

const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <section className="Special-feature-section wrapper m-section" id="benefits">
      <div className="special-header">
        <SectionHeader {...SECTION_HEADERS.benefits} />
      </div>
      <div className="grid">
        {benefits.map((benefit, index) => (
          <MotionWrapper key={benefit.id} delay={index * 0.2} >

            <BaseCardComponent
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          </MotionWrapper>
        ))}
      </div>
    </section >
  );
};

export default BenefitsSection;
