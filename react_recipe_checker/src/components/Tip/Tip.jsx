import {useState} from 'react'
import './Tip.css'


const Tip = () => {
  
  const [billAmount, setBillAmount] = useState('')
  const [tipPercentage, setTipPercentage] = useState('')
  const [numPeople, setNumPeople] = useState('')
  const [totalAmount, setTotalAmount] = useState('')
  const [totalTip, setTip] = useState('')
  const [amountPerPerson, setAmountPerPerson] = useState('')

  const setDefault = () => {
    setBillAmount(0)
    setTipPercentage(0)
    setNumPeople(0)
  }
  
  const handleSubmission = (e) => {
    setDefault()
    e.preventDefault()
    const tip = (tipPercentage * billAmount)/100
    setTip(tip)
    const totalAmount = tip + billAmount
    setTotalAmount(totalAmount)
    const amountPerPax = totalAmount / numPeople
    setAmountPerPerson(amountPerPax)
  }

  return (
      <div>
        <form onSubmit={(e) => {handleSubmission(e)}}>
        <label> Bill Amount: </label>
        <input 
          type="number"
          onChange={(e) => setBillAmount(parseInt(e.target.value))}>
        </input>
        <br/>

        <label> Tip Percentage:</label>
        <input
          type="number"
          onChange={(e) => setTipPercentage(parseInt(e.target.value))}>
        </input>
        <br/>

        <label> Number of People:</label>
        <input 
          type="number"
          onChange={(e) => setNumPeople(parseInt(e.target.value))}>
        </input>

        <br/>
        <br/>
        
        <button>Submit</button>
        </form>

      <h1>Results</h1>
      <p>Total tip: ${totalTip}</p>
      <p>Total Amount: ${totalAmount}</p>
      <p>Amount per person: ${amountPerPerson}</p>
    </div>
  )
}

export default Tip