import { useState } from "react";
function FunctionalComponent(){
    const [counter, setCounter]= useState(0)
    const increment =() => {
        setCounter(counter + 1);

    }

    return (
    <div>
    <div>Counter value: {counter}</div>

    <div>
        <button onClick={increment}>crement</button>
    </div>
    
    </div>
    )

}

export default FunctionalComponent;