import { FadeIn } from '../../../../Animation/FadeIn';
import { SECTION_HEADERS } from '../../../../constants/data';
import type { NavigateSectionProps } from '../../../../types';
import SectionHeader from '../../../SharedComponents/SectionHeader/SectionHeader';
import NavigateCard from '../NavigateCard/NavigateCard';
import './NavigateSection.css';

const NavigateSection = ({ pages }: NavigateSectionProps) => {
  return (
    <section className="navigation-section wrapper m-section" id="navigation">

      <SectionHeader {...SECTION_HEADERS.navigation} />


      <div className="navigation-grid">
        {pages.map((page) => (
          <FadeIn>

            <NavigateCard
              key={page.id}
              title={page.title}
              description={page.description}
              link={page.link}
              id={page.id}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default NavigateSection;
