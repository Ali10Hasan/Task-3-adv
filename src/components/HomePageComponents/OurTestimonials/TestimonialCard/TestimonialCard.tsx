import starIcon from '../../../../assets/icons/rating-star.png';
import './TestimonialCard.css';
import type { TestimonialCardProps } from '../../../../types';

const TestimonialCard = ({ name, avatar, rating, content }: TestimonialCardProps) => {


  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <img key={i} src={starIcon} alt="star" className="star-icon" />
      );
    }
    return stars;
  };


  return (
    <div className="testimonial-card p-relative">
      <div className="testimonial-card__header center-flex">
        <div className="testimonial-card__avatar">
          <img src={avatar} alt={name} />
        </div>
        <h4 className="testimonial-card__name">{name}</h4>
      </div>

      <div className="testimonial-card__rating center-flex">
        {renderStars()}
      </div>

      <p className="testimonial-card__content">{content}</p>
    </div>
  );
};

export default TestimonialCard;
