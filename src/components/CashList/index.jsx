import { CashCard } from "./CashCard"
import styles from "./style.module.css"

export const CashList = ({financesList, removeFinanceFromFinancesList}) => {
    if (financesList.length === 0) {
        return <h2>Você ainda não possui nenhum lançamento</h2>
    } else {
        return(
            <ul className={styles.cashList}>
                {financesList.map((finance) => {
                    return <CashCard key={finance.id} finance={finance} removeFinanceFromFinancesList={removeFinanceFromFinancesList} />
                })}
            </ul>
        )
    }
}