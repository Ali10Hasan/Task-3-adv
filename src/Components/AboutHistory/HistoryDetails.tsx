import styles from "./History.module.css"
interface HistoryDetailsProps {
  icons: string[];
  title: string;
  description: string;
}
const HistoryDetails = ({ icons, title, description }:HistoryDetailsProps) => {
  return (
    <div className={styles.historyDetails}>
          
      <div className={`${styles.divider} ${title==="Inception and Growth"?styles.DeleteDashedLinee:""}`}>
        <span className={styles.circle}></span>
            <span className={styles.dashedLine}><div></div></span>
            <span className={styles.dashedLinee}><div></div></span>
        <span className={styles.circle}></span>
      </div>
      
      <div className={styles.iconsContainer}>
    
        {icons.map((icon, index) => (
          <img key={index} className={`${index==0?styles.icon1:styles.icon2}`} src={icon} />
        ))}
      </div>
      <div className={styles.TextContent}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      </div>
    
    </div>
  )
}

export default HistoryDetails