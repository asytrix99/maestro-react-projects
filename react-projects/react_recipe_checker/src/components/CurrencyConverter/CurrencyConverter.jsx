import React ,{useState} from 'react'
import "./CurrencyConverter.css"

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('')
    const [fromCurrency, setFromCurrency] = useState('')
    const [toCurrency, setToCurrency] = useState('')
    const [converted, setConverted] = useState()
    const [error, setError] = useState('')
    
    const curr = ["USD", "EUR", "GBP", "JPY", "TRY", "CNY"]

    const fetchChange = async() => {
        try {
            const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
            const data = await response.json();
            const curr = data.rates[toCurrency]
            setConverted(curr.toFixed(2))
        }
        catch (error) {
            setError(`Error in fetching rate`)
        }
    }

    return (
    <div>
        <h1>Currency Converter</h1>

        <input
            type="number"
            placeholder="Enter amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}/>
        <select
            value={fromCurrency}
            placeholder="Amount"
            onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="">Select From Currency</option>
            {curr.map((currency) => (        
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>

        <hr/>
        
        <select
            value={toCurrency}
            placeholder="Converted"
            onChange={(e) => setToCurrency(e.target.value)}>
            <option value="">Select from Currency</option>
            {curr.map((currency) => (      
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>

        <hr/>

        <button 
            onClick={()=>fetchChange()}>
            Convert
        </button>
        <br/>
        <span> Converted amount is from {amount} {fromCurrency} to {converted} {toCurrency} </span>

    </div>
  )
}

export default CurrencyConverter