import type { IHeroData } from "../../../types";
import "./PageHero.css";
import PageHeroAbstract from '../../../assets/icons/PageHeroAbstract.png';
import { FadeIn } from "../../../Animation/FadeIn";
import MotionWrapper from "../../../Animation/MotionWrapper";


const PageHero = ({ badge, title, description, contactItems }: IHeroData) => {
  return (
    <FadeIn >
      <section className="page-hero between-flex" style={{ backgroundImage: `url(${PageHeroAbstract})` }}>
        <div className="page-hero__content">
          <div className="page-hero__badge__container">
            <span className="page-hero__badge">{badge}</span>
          </div>
          <h1 className="page-hero__title">{title}</h1>
        </div>

        <div className="page-hero__info">
          <p className="page-hero__description">{description}</p>

          {contactItems && (
            <MotionWrapper delay={0.4}>


              <div className="page-hero__contact-grid">
                {contactItems.map((item) => (
                  <div key={item.id} className="page-hero__contact-card">
                    <div className="page-hero__contact-icon center-flex">
                      <img src={item.icon} alt={item.type} />
                    </div>
                    <span className="page-hero__contact-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          )}
        </div>
      </section >
    </FadeIn>
  );
};

export default PageHero;
