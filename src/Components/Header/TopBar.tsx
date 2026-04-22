import styles from "./Header.module.css"
interface Topbar{
  Text:string,
  icon:string
}
const TopBar = ({Text,icon}:Topbar) => {
  return (
    <div className={styles.TopBarContainer}>
    <div className={styles.TopBarContent}>
      <div className={styles.Text}>
        <p>{Text}</p>
      <img src={icon} alt="" />
      </div>
    
    </div>
    </div>
  )
}

export default TopBar