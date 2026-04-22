import styles from "./Testimonials.module.css";
interface CardProps{
  image:string,
  name:string,
  stars:string,
  paragraph:string
}
const TestimonialsCard = ({image,name,stars,paragraph}:CardProps) => {
  return (
    <div className={styles.TestimonialsCard}>
      <div className={styles.PrsonalInfo}>
          <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.name}>
            {name}
        </div>
      </div>
        
        <div className={styles.stars}>
            <img src={stars} alt="" />
        </div>
        <div className={styles.paragraph}>
            {paragraph}
        </div>
        
    </div>
  )
}

export default TestimonialsCard