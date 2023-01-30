import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 11,
            collectionName: "My Movies"
        }
        this.resetCounter = this.resetCounter.bind(this);
    }

    decrementCounter() {
        //this.setState({count: this.state.count - 1})   not recommended but works
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    incrementCounter() {
        //this.setState({count: this.state.count + 1})   not recommended but works
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    resetCounter() {
        //this.setState({count: this.state.count + 1})   not recommended but works
        this.setState({count: 0})
    }

    render() {
        return (
            <div className='counter'>
                <h3>{this.state.collectionName} Counter</h3>
                <button onClick={this.incrementCounter.bind(this)}>+</button>
                <span>{this.state.count}</span>
                <button onClick={(e) => this.decrementCounter()}>-</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        )
    }
}

export default Counter;