import React, { Component } from 'react'

let arr = []

class ContactCard extends Component{
	constructor(props){
	super(props)
	this.state = {
		name: "",
		email: "",
		mobile: "",
		work: ""
	}
	this.handleNameChange = this.handleNameChange.bind(this)
  this.handleButtonClick = this.handleButtonClick.bind(this)
	// this.handleEmailChange = this.handleEmailChange.bind(this)
	// this.handleMobileChange = this.handleMobileChange.bind(this)
	// this.handleWorkChange = this.handleWorkChange.bind(this)
}
	render(){
		return(
			<div>
			<p>******Contact Cards*******</p>

			Name: <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
			<br/>
			<button onClick={this.handleButtonClick}>Submit</button>
			<br/>
			<p>****My Contact Cards Entered *****</p>

			<ul>
			{arr.map((i)=><li key={i}>
				{i}
				</li>
				)}
			</ul>

			</div>
			)
	}
	handleNameChange(event){
		this.setState({
			name: event.target.value
		})
	}

	handleButtonClick(){
	arr.push(this.state.name)	
	this.setState({
		name: '',
	  email: '',
		mobile: '',
  	work: ''
	 })
	}
}

export default ContactCard