import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactCard extends Component{
    render(){
        return(
            <div>
                <strong>Name:</strong><span>{this.props.name}</span>
                <br />
                <strong>Email:</strong><span>{this.props.email}</span>
                <br />
                <strong>Mobile:</strong><span>{this.props.mobile}</span>
                <br / >
                <strong>Work:</strong><span>{this.props.work}</span>
                <br />
                
                </div>
        )
    }
}

ContactCard.propTypes = {
    name : PropTypes.string.isRequired,
    email :PropTypes.string.isRequired,
    mobile:PropTypes.string.isRequired,
    work :PropTypes.string
}

export default ContactCard