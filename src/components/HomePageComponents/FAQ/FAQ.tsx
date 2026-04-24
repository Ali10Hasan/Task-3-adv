import { useState } from 'react';
import FaqCard from './FaqCard/FaqCard';
import './FAQ.css';
import SectionHeader from '../../SharedComponents/SectionHeader/SectionHeader';
import type { FAQSectionProps } from '../../../types';
import { FadeIn } from '../../../Animation/FadeIn';
import { SECTION_HEADERS } from '../../../constants/data';

const FAQSection = ({ faqData }: FAQSectionProps) => {

  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="faq-section wrapper m-section" id="FAQ">
      <SectionHeader {...SECTION_HEADERS.faq} />

      <div className="faq-columns-container">
        {faqData.map((column, index) => (
          <div className="faq-column" key={index}>
            {column.map((item) => (
              <FadeIn>
                <FaqCard
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              </FadeIn>

            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
