import styles from "./Navigate.module.css"
interface NavigateProps{
  title:string,
  description:string,
  btnText:string,
}
const NavigateCard = ({title,description,btnText}:NavigateProps) => {
  return (
    <div className={styles.NavigateCard}>
      <div className={styles.NavigateBody}>
      <div className={styles.NavigateHead}>
        <div className={styles.NavigateTitle}>
           {title}
        </div>
          
           <div className={styles.divider}>
    <span className={styles.circle}></span>
            <span className={styles.dashedLine}><div></div></span>
            <span className={styles.dashedLine}><div></div></span>
            <span className={styles.dashedLine}><div></div></span>
            <span className={styles.dashedLine}><div></div></span>
            <span className={styles.dashedLine}><div></div></span>
            <span className={styles.dashedLine}><div></div></span>
      
     <span className={styles.circle}></span>
</div>
      </div>
     
        <div className={styles.NavigateDescription}>
              {description}
        </div>
      </div>
            <div className={styles.NavigateBtn}>
              {btnText}
              <img src="/Arrow.png" alt="" />
            </div>
    </div>
  )
}

export default NavigateCard