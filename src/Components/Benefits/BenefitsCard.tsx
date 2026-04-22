import styles from "./Benefits.module.css"
import type { BenefitsCardType } from './BenefitsSection'
const BenefitsCard = ({icone,title,description}:BenefitsCardType) => {
  return (
    <div className={styles.card}>
      <div className={styles.CardIcon}>
          <img src={icone} alt="" />
      </div>
      <div className={styles.BoxCard}>
      <div className={styles.CardTitle}>
          {title}
      </div>
      <div className={styles.CardDescription}>
          {description}
      </div>
      </div>
     
    </div>
  )
}

export default BenefitsCard