import styles from "./Award.module.css";

type AwardCardProps = {
  icone: string;
  title: string;
  desc: string;
};

const AwardCard = ({ icone, title, desc }: AwardCardProps) => {
  return (
    <div className={styles.SliderCard}>
      <img src={icone} alt={title} />
      <div className={styles.SliderTitle}>{title}</div>
      <div className={styles.SliderDesription}><p>{desc}</p></div>
    </div>
  );
};

export default AwardCard;