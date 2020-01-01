import React, {Component} from 'react'


class Addition extends Component{
    constructor(props){
        super(props)
        this.state = {
            num1: this.props.num1,
            num2: this.props.num2,
            answer: ""
        }
    }
    render(){
        return(

            <div>
                <p>*******My Addition Component  ******</p>
            <strong>Num1:</strong><span>{this.state.num1}</span>  <br />
               
            <strong>Num2:</strong><span>{this.state.num2}</span> 
                
                <button onClick={this.handleClick.bind(this)}>Addition</button> <br />
                
                <strong>Answer:</strong><span>{this.state.answer}</span>
            </div>
        )
    }
    handleClick(){

        this.setState({
            num1:   this.state.num1,
            num2:   this.state.num2,
            answer: this.state.num1 + this.state.num2
        })
    }
}


export default Addition