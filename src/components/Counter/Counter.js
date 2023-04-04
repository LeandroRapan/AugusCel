import { useState } from "react";


const Counter = (props) => {
    const [count, setCount] = useState(props.initial)
    const [message, setMessaje] = useState(' ')
    const decrement = () => {
        setMessaje(' ')
        if(count >1){setCount(count-1)}
        else{
            setMessaje('No puede comprar menos de 1')
        }
    }
    const increment = ()=> {
        setMessaje('')
        if (count< props.stock){
            setCount(count+1)
        }
        else{
            setMessaje('no se puede agregar más')
        }
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{count}</h2>
            <h3>Cantidad disponible: {stock}</h3>
            <button label="-" onClick={decrement}  style={{width:"20"}}/>
            <button label="+" onClick={increment} style={{width:"20"}}/>
           
        </div>

    )
}
export default Counter