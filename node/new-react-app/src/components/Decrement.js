import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Decrement extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: this.props.num
        }
    }
    render(){
        return(

            <div class="decrement">
                  <p>*******My Decrement Component  ******</p>
                <span>{this.state.num}</span>
                <button onClick={this.handleClick.bind(this)}>Decrement</button>
            </div>
        )
    }
    handleClick(){

        if(this.state.num<=0){
            alert('connot be less than Zero')
            return this.setState({
                num:0
            })
        }
        this.setState({
            num: this.state.num -1, 
        })
    }
}

Decrement.propTypes ={
    num: PropTypes.number.isRequired
}

export default Decrement