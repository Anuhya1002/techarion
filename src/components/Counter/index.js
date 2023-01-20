import React ,{Component }from "react";
import '../Counter/index.css'

class Counter extends Component{
    state = {count : 0}

    onIncrement = () =>{
        this.setState((prevState) => ({count: prevState.count + 3}))
    }

    onDecrement = () =>{
        this.setState((prevState) => ({count: prevState.count - 3}))
    }

    render() {
        const {count} = this.state
        return(
            
        <div className="card">
            <div className="container">
                <h1 className="counter-heading">Counter</h1>
                <button type="button" className="button-edit" onClick={this.onDecrement}> - </button>
                <h1 className="count-number">{count}</h1>
                <button type="button" className="button-edit" onClick={this.onIncrement}> + </button>
            </div>
        </div>
        )
    }
}

export default Counter