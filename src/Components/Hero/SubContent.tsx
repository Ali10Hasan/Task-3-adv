
import styles from "./Hero.module.css"
interface SubContentInterface{
    subTitle:string,
    Title:string,
    description:string,
    SpanTitle:string
}
const SubContent = ({subTitle,Title,description,SpanTitle}:SubContentInterface) => {
  return (
    <div className={styles.SubTitleContainer}>
        <div className={styles.subTitle}>
            <p>{subTitle}</p>
            <hr/>
        </div>
        <div className={styles.Title}>
            <p>{Title }<span>{SpanTitle}</span></p>
        </div>
        <div className={styles.Description}>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SubContent