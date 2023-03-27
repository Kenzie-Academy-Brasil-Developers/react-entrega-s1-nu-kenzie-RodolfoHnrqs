export const CashCard = ({finance, removeFinanceFromFinancesList}) => {
    return(
        <li>
            <div>
                <p>{finance.description}</p>
                <span>{finance.cashType}</span>
            </div>
            <div>
                <span>{`R$: ${parseFloat(finance.amount).toFixed(2)}`}</span>
                <button onClick={() => removeFinanceFromFinancesList(finance.id)}>Excluir</button>
            </div>
        </li>
    )
}