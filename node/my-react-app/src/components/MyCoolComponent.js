
 import React, { Component } from 'react';
 import PropTypes from 'prop-types'


 class MyCoolComponent extends Component {
   constructor(props) {
       super(props)
       this.propTypes = {
           id: 4,
           message: 'oh dear !!'
       }
}
   render() {
     return <h1 id={this.props.id}>{this.props.message} </h1>
} };
 MyCoolComponent.propTypes = {
   id: PropTypes.number.isRequired,
   message: PropTypes.string
}

export default MyCoolComponent