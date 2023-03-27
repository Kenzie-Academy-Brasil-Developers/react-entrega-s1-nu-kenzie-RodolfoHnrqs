import { useState } from "react"

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
        <form onSubmit={submitForm}>
            <label htmlFor="">Descrição</label>
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Digite aqui sua descrição" />
            <span>Ex: Compra de roupas</span>
            <label htmlFor="">Valor (R$)</label>
            <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="0 R$" />
            <label htmlFor="">Tipo de valor</label>
            <select name="entryType" id="entryType" onChange={(event) => setCashType(event.target.value)}>
                <option value="">Selecione o tipo</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
            <button type="submit">Inserir valor</button>
        </form>
    )
}