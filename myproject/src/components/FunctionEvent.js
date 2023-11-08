function FunctionEvent() {
    function handleClick(){
        console.log("Button Clicked")
    }
    return (
        <>
        Functional Component
        <button onClick={handleClick} >Click me</button>
        
        
        
        </>
    )
}
export default FunctionEvent;