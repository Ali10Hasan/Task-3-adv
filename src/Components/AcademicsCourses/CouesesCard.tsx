import styles from "./Courses.module.css"
interface CouesesCardProps {
    image: string;
    title: string;
    desc: string;
}
const CouesesCard = ({image,title,desc}:CouesesCardProps) => {
  return (
    <div className={styles.coursesCard}>
        <div className={styles.image}>
            <img src={image} alt="" />
        </div>
        <div className={styles.TextContent}>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
       
    </div>
  )
}

export default CouesesCard