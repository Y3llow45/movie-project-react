import { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: "Any"
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({company: "MyCompany"})
        }, 1000);
    }
    componentDidUpdate() {
        console.log('component did update');
    }
    componentWillUnmount(){

    }
    render() {
        return <span>{this.props.text} || {this.state.company}</span>
    }
}

export default Message