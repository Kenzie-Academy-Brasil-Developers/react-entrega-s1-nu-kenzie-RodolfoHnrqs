import { useState } from 'react'
import { CashForm } from './components/CashForm'
import { CashList } from './components/CashList'
import { Header } from './components/Header'
import { v4 as uuidv4} from 'uuid'
import { TotalMoney } from './components/TotalMoney'
import './styles/index.css'

function App() {
  const [financesList, setFinancesList] = useState([])

  const totalBalance = financesList.reduce((previousValue, finance) => {
    if (finance.cashType === "Entrada"){
      return Number(previousValue += parseFloat(finance.amount))
    } else if (finance.cashType === "Despesa"){
      return Number(previousValue - finance.amount)
    }
  }, 0)

  const addNewFinance = (formData) => {
    const newFinance = {...formData, id: uuidv4()}
    const newFinancesList = [...financesList, newFinance]
    setFinancesList(newFinancesList)
  }

  const removeFinanceFromFinancesList = (financeId) => {
    const newFinancesList = financesList.filter(finance => finance.id !== financeId )
    setFinancesList(newFinancesList)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <CashForm addNewFinance={addNewFinance} />
          <TotalMoney totalBalance={totalBalance} financesList={financesList} />
        </div>
        <div>
          <h3 className="titleThree">Resumo financeiro</h3>
          <CashList financesList={financesList} removeFinanceFromFinancesList={removeFinanceFromFinancesList} />
        </div>
      </main>
    </div>
  )
}

export default App
