import { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(() => {
            this.forceUpdate();
        }, 1000);
    }
    componentDidUpdate() {
        console.log('component did update');
    }
    render() {
        return <span>{this.props.text}</span>
    }
}

export default Message