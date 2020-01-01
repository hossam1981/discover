import React, { Component } from 'react'

class AddressBook extends Component{
	constructor(props){
		super(props)

		this.state={
			name: '',
			email: '',
			phone: '',
			address: ''
		}
	}

	render(){
		return(
			<div>

			Name:<input type='text' ref='name' />
			<br />
			Email: <input type='text' ref='email' />
			<br />
			Phone: <input type='text' ref='phone' />
			<br />
			Address: <input type='text' ref='address' />
			<br />
			<button onClick={this.handleClick}>Save</button>
			<br />
			<p>********Address Book************</p>
			Name: <span>{this.state.name2}</span><br/>
			Email: <span>{this.state.email2}</span><br/>
			Phone: <span>{this.state.phone2}</span><br/>
			Address: <span>{this.state.address2}</span><br/>
			</div>
			)
	}

	
	handleClick=()=>{
		this.setState({
			name2: this.refs.name.value,
			email2: this.refs.email.value,
			phone2: this.refs.phone.value,
			address2: this.refs.address.value
		})
			this.refs.name.value = ''
			this.refs.email.value = ''
			this.refs.phone.value = ''
			this.refs.address.value = ''
	}
}

export default AddressBook

