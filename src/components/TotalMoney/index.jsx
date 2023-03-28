import styles from "./style.module.css"

export const TotalMoney = ({financesList, totalBalance}) => {
    if (financesList.length === 0) {
        return <div></div>
    } else {
        return(
            <div className={styles.totalMoney}>
                <span className="titleThree">Valor total: </span>
                <p className="titleThree">{`R$: ${parseFloat(totalBalance).toFixed(2)}`}</p>
            </div>
        )
    }
}