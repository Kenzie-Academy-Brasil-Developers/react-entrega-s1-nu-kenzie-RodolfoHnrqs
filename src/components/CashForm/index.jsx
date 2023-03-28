import { useState } from "react"
import styles from "./style.module.css"

export const CashForm = ({ addNewFinance }) => {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [cashType, setCashType] = useState("")

    const submitForm = (event) => {
        event.preventDefault()
        if (cashType === ""){
            alert("Selecione um tipo de lançamento")
        } else if (amount === ""){
            alert("Você precisa digitar um valor")
        } else if (description === ""){
            alert("Digite uma descrição")
        } else {
            const formData = {description, amount, cashType}
            addNewFinance(formData)
        }
    }

    return(
        <form onSubmit={submitForm} className={styles.form}>
            <label htmlFor="" className="regularFont">Descrição</label>
            <input type="text" className="headline" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Digite aqui sua descrição" />
            <span className="regularFont">Ex: Compra de roupas</span>
            <label htmlFor="" className="regularFont">Valor (R$)</label>
            <input type="number" className="headline" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="0 R$" />
            <label htmlFor="" className="regularFont">Tipo de valor</label>
            <select name="entryType" id="entryType" className="regularFont" onChange={(event) => setCashType(event.target.value)}>
                <option value="">Selecione o tipo</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
            <button className="titleThree" type="submit">Inserir valor</button>
        </form>
    )
}