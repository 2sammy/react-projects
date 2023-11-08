import { Component } from "react";

class ClassEvent extends Component{
    handleClick(){
        console.log("click")
    }
    render(){
        return(
            <>
            this is a class based Component
            <button onClick={this.handleClick}></button>
            </>
        )
    }
}
export default ClassEvent
