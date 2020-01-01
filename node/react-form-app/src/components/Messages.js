import React, { Component } from 'react'

class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
           inputMessage:'',
           outputMessage : ''
        }
    }
    render(){
        return(
            <div class="container">
            {/* <p>{this.props.match.params.name}</p> */}
                Message: <textarea value ={this.state.inputMessage}onChange={this.handleInputMessage}></textarea> 
                <br />
                <br />
                <button onClick={this.handleButtomClick}>Send</button>
                <p> ******* Send Me Message ****** </p>
                <p>{this.state.outputMessage}</p>
                
                </div>

        )
    }

    handleInputMessage=(e)=>{
        this.setState({
            inputMessage: e.target.value
        })
    }

    handleButtomClick=()=>{
        this.setState({
            outputMessage: this.state.inputMessage
        })
      }
    }
 export default Messages  