import { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
    }
    render() {
        return <span>{this.props.text}</span>
    }
}

export default Message