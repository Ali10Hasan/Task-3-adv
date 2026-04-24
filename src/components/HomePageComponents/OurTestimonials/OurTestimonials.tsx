import { useState } from 'react';
import arrowLeft from '../../../assets/icons/arrow-left.png';
import arrowRight from '../../../assets/icons/arrow-right.png';
import './OurTestimonials.css';
import type { TestimonialsSectionProps } from '../../../types';
import SectionHeader from '../../SharedComponents/SectionHeader/SectionHeader';
import { FadeIn } from '../../../Animation/FadeIn';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import { SECTION_HEADERS } from '../../../constants/data';

const OurTestimonials = ({ testimonials }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalItems = testimonials.length;



  const nextSlide = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="testimonials-section wrapper m-section" id='testimonials'>

      <SectionHeader {...SECTION_HEADERS.testimonials} />

      <FadeIn>
        <div className="slider-container">
          <div className="slider-viewport">
            <div
              className="slider-track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / var(--items-per-view))))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div className="slider-item" key={testimonial.id}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="control__Buttons">
            <button className="slider-btn prev center-flex" onClick={prevSlide} disabled={currentIndex === 0}>
              <img src={arrowLeft} alt="Previous" />
            </button>
            <button className="slider-btn next center-flex" onClick={nextSlide} disabled={currentIndex >= totalItems - 1}>
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

export default OurTestimonials;
