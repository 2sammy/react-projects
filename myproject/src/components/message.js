import { Component} from 'react'

// inherit from the component
class Message extends Component {
    render() {
        return <h1>this is class component</h1>
    }

}

class Content extends Component {
    render(){
        return <h2>Message: {this.props.content}</h2>
    }
}
export default {Message, Content}