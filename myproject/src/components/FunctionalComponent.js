import { useState } from "react";
function FunctionalComponent(){
    const [counter, setCounter]= useState(0)
    const [counting, setCounting] = useState(100)

    const decrement = () => {
        setCounting(counting -1);
    }
    const increment =() => {
        setCounter(counter + 1);

    }

    return (
    <div>
    <div>Counter value: {counter}</div>

    <div>
        <button onClick={increment}>crement</button>
    </div>
    <div>
        <button onClick={decrement}>crement</button>
    </div>
    
    </div>
    )

}

export default FunctionalComponent;