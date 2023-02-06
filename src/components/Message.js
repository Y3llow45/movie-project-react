import { Component } from "react";
import './Message.css';

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
        /*let style = {
            backgroundColor: 'pink',
            fontSize: 44
        };
        if(true) {
            style.textDecoration = 'underline'
        }*/
        let classes = ['default-class'];
        if(true) {
            classes.push('selected-movie')
        }
        return <span /*style={style}*/ className={classes.join(" ")}>{this.props.text} || {this.state.company}</span>
    }
}

export default Message