import { FadeIn } from '../../../Animation/FadeIn';
import type { ISectionHeader } from '../../../types';
import './SectionHeader.css';

const SectionHeader = ({ subTitle, title, description }: ISectionHeader) => {
  return (
    <FadeIn>
      <div className="section-header center-flex">
        <div className="section-header__subtitle">
          {subTitle}
        </div>

        <h2 className="section-header__title">
          {title}
        </h2>

        <p className="section-header__description">
          {description}
        </p>
      </div>
    </FadeIn>
  );
};

export default SectionHeader;
