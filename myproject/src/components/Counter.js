import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state= {
            counter: 100,
        };
        this .increment = this.increment.bind(this)
    }
    //increment(){
       // this.setState ({
           // counter: this.state.counter +1
      //  });
    //}
    decrement =()=>{
        this.setState({
            counter: this.state.counter -1,
        });
    }
    render(){
        return(
            <> 
        <h1>Count value is:{this.state.counter}</h1>
        <button onClick={this.decrement}>click the button</button>
        </>
        )

    }
}
export default Counter;


