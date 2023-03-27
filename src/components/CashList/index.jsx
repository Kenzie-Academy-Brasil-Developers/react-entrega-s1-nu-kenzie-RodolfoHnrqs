import { CashCard } from "./CashCard"

export const CashList = ({financesList, removeFinanceFromFinancesList}) => {
    if (financesList.length === 0) {
        return <h2>Você ainda não possui nenhum lançamento</h2>
    } else {
        return(
            <ul>
                {financesList.map((finance) => {
                    return <CashCard key={finance.id} finance={finance} removeFinanceFromFinancesList={removeFinanceFromFinancesList} />
                })}
            </ul>
        )
    }
}