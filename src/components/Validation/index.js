import React, {Component} from "react";
import handleSubmit  from "./handleSubmit";
import './index.css'

class Validation extends Component{

    render(){
        return(
            <form onSubmit={handleSubmit}>
                <input type="email" name ="email" placeholder = "Email"/>
                <br/>
                <input type = "text" name = "name" placeholder="Name"/>
                <br/>
                <input type= "text" name = "message" placeholder ="Message"/>
                <br/>
                <button type="Submit">Submit</button>
            </form>
        )
    }
}

export default Validation