import styles from "./style.module.css"

export const CashCard = ({finance, removeFinanceFromFinancesList}) => {
    if (finance.cashType === "Entrada"){
        return(
            <li className={styles.cashCardGreen}>
                <div className={styles.cashDesc}>
                    <p className="titleThree">{finance.description}</p>
                    <span className="regularFont">{finance.cashType}</span>
                </div>
                <div className={styles.cashAmount}>
                    <span className="regularFont">{`R$: ${parseFloat(finance.amount).toFixed(2)}`}</span>
                    <button onClick={() => removeFinanceFromFinancesList(finance.id)}>Excluir</button>
                </div>
            </li>
        )
    } else{
        return(
            <li className={styles.cashCard}>
                <div className={styles.cashDesc}>
                    <p className="titleThree">{finance.description}</p>
                    <span className="regularFont">{finance.cashType}</span>
                </div>
                <div className={styles.cashAmount}>
                    <span className="regularFont">{`R$: ${parseFloat(finance.amount).toFixed(2)}`}</span>
                    <button onClick={() => removeFinanceFromFinancesList(finance.id)}>Excluir</button>
                </div>
            </li>
        ) 
    }
}