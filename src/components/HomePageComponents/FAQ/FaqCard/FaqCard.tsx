import plusIcon from '../../../../assets/icons/plus.png';
import minusIcon from '../../../../assets/icons/minus.png';
import './FaqCard.css';
import type { FaqCardProps } from '../../../../types';



const FaqCard = ({ question, answer, isOpen, onToggle }: FaqCardProps) => {
  return (
    <div onClick={onToggle} className={`faq-card ${isOpen ? 'active' : ''}`}>
      <div className="faq-card__header">
        <h4 className="faq-card__question">{question}</h4>
        <div className="faq-card__btn center-flex">
          <img src={isOpen ? minusIcon : plusIcon} alt="toggle" />
        </div>
      </div>

      {isOpen && (
        <div className="faq-card__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
