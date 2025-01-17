
import React, {useState} from 'react';

function Counter () {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
    return (
        <div className="counter">
            <p className="count-display">{count}</p>
            <button className="counterBtn" onClick={decrement}>Decrement</button>
            <button className="counterBtn"onClick={reset}>Reset</button>
            <button className="counterBtn"onClick={increment}>Increment</button>
        </div>

    );

}

export default Counter