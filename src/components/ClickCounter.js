import React, {useState} from 'react'

const ClickCounter = () => {
    
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <h3>useState with prevState</h3>
            <h4>Total count: {count}</h4>
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick = {() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick = {() => incrementByFive()}>Increment by 5</button>
        </div>
    )
}

export default ClickCounter
