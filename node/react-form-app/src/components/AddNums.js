import React, { Component } from 'react'




class AddNums extends Component{
    constructor(props){
        super(props)
        this.state = {
            num1: '',
            num2: '',
            answer: ""
        }
    }
    render(){
        return(

            <div>
               
          Num1:<input type='number' value={this.state.num1} onChange={this.handleChangeNum1}></input>
          <br />
          Num2:<input type='number' value={this.state.num2} onChange={this.handleChangeNum2}></input>
          <br />
          <button onClick={this.handleClick}>Add</button>
          <br />
          Answer: <span> {this.state.answer} </span>

           <p> ******* 
               Another Way ****** </p>
          </div>
        )
    }

    handleChangeNum1=(e)=>{
        this.setState({
            num1: e.target.value
            })
        }
        handleChangeNum2=(e)=>{
            this.setState({
                num2: e.target.value
                })
            }
            handleClick=(e)=>{
                this.setState({
                    answer: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10)
                    })
                }
            }
  
export default AddNums