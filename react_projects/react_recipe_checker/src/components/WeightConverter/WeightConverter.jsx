import {useState} from 'react'
import './WeightConverter.css'

const WeightConverter = () => {

    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('')
    const [result, setResult] = useState('')

    const handleConversion = (e) => {
        e.preventDefault()
        if (unit == "Pounds") {
            setResult((weight * 2.20462).toFixed(2) + 'lbs')
        } else if (unit == "Kilograms") {
            setResult((weight / 2.20462).toFixed(2) + 'kg')
        }
    }

    return (
        <div className='container'>
            <form onSubmit={(e) => {handleConversion(e)}}>
            <label> Weight Converter:</label><br/>
            <input
                type="number"
                placeholder="Enter weight"
                onChange={(e) => setWeight(parseInt(e.target.value))}/>
            
            <br/><br/>
            <select
                onChange={(e) => setUnit(e.target.value)}>
                <div>
                    <option value="Kilograms">Kilograms</option>
                    <option value="Pounds">Pounds</option>
                </div>
            </select><br/><br/>
            <button onClick={(e) => setResult(e.target.value)}>Convert</button>
            <p>{result}</p>
            </form>
        </div>
    )
}

export default WeightConverter