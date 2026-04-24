
import { FadeIn } from '../../../Animation/FadeIn';
import MotionWrapper from '../../../Animation/MotionWrapper';
import type { IHeroData } from '../../../types';
import './Hero.css';

const Hero = ({
  subTitle,
  titlePart1,
  titlePart2,
  description,
  stats,
  image
}: IHeroData) => {
  return (
    <section className="hero__grid wrapper">
      <MotionWrapper delay={0.3}>

        <div className="hero__image">
          <img src={image} alt="Little Learners Academy" className="main-hero-img" />
        </div>
      </MotionWrapper>
      <FadeIn>

        <div className="hero__content">
          <div className="hero__badge">
            {subTitle}
          </div>
          <h1 className="hero__title">
            {titlePart1} <span>{titlePart2}</span>
          </h1>
          <p className="hero__description">
            {description}
          </p>

          <div className="hero__stats-card border">
            {stats?.map((stat) => (
              <div key={stat.id} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

export default Hero;
