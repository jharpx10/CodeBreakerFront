import {React,useState} from 'react'
import { getResultOfNumber } from '../services/connection';

const CodeBreakerView = () => {

    const [guessNumber, setGuessNumber] = useState();
    const [result, setResult] = useState("");

    const reload = () => {
        alert("Adivinaste!")
        window.location.reload(false);
    }
    const handleInput = (e) => {
        setGuessNumber(e.target.value)
    }
    const guessNewNumber = async () => {
        const json = await getResultOfNumber(guessNumber);
        const resulti=await json.result;
        console.log(json)
        if(resulti==="XXXX") reload();
        setResult(await resulti)
        return;
    }


    return (
        <div className="App">
            <label htmlFor="num">Número</label>
            <input name="num" value={guessNumber} onChange={handleInput} ></input>
            <button onClick={guessNewNumber}>Enviar</button>
            <h6>Respuesta: {result}</h6>
        </div>
    );
}

export default CodeBreakerView
