import styles from "./Frequently.module.css"
interface FreqDataProps{
    question:string,
    answer?:string,
    isOpen:Boolean,
    onToggle:()=>void
}
const FrequentlyItem = ({question,answer,isOpen,onToggle}:FreqDataProps) => {
  return (
    <div>
        <div className={`${styles.querey} ${isOpen?styles.open:""}`}>
            <div className={styles.queryContent}>
                <div className={styles.questionContent}>
                <div className={styles.question}>
                    {question}
                </div>
                <div className={styles.icon}>
                    
               <img src={isOpen?"/Task-3-adv/Decreament.png":"/Task-3-adv/increament.png"} alt="" onClick={onToggle} />
                    
                
                </div>
                
                </div>
                {isOpen&&(
                    <div className={styles.answer}>
                     <hr/>
                     {answer}
                    
                    </div>
                )}
           
           
            </div>
          
            
        </div>
        

    </div>
  )
}

export default FrequentlyItem