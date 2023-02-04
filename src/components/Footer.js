import { Component } from "react";
import Message from './Message'
import refreshComponent from "./hoc/refreshComponent";

class Footer extends Component {
    render() {
        console.log(this.props.refreshCount);
        return (this.props.refreshCount) ? <Message text="All rights reserved &copy;" /> : null
    }
}

export default refreshComponent(Footer)