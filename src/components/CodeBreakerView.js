import {React,useState} from 'react'
import { getResultOfNumber } from '../services/connection';

const CodeBreakerView = () => {

    const [guessNumber, setGuessNumber] = useState();
    const [result, setResult] = useState("");
    const handleInput = (e) => {
        setGuessNumber(e.target.value)
    }
    const guessNewNumber = async () => {
        const result = await getResultOfNumber(guessNumber);
        setResult(result);
        return;
    }


    return (
        <div className="App">
            <label htmlFor="num">Número</label>
            <input name="num" value={guessNumber} onChange={handleInput} ></input>
            <button onClick={guessNewNumber}>Enviar</button>
            <label value={result}></label>
        </div>
    );
}

export default CodeBreakerView
