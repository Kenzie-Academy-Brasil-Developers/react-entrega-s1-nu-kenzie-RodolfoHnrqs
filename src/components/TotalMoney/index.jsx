export const TotalMoney = ({financesList, totalBalance}) => {
    if (financesList.length === 0) {
        return <div></div>
    } else {
        return(
            <div>
                <span>Valor total: </span>
                <p>{`R$: ${parseFloat(totalBalance).toFixed(2)}`}</p>
            </div>
        )
    }
}