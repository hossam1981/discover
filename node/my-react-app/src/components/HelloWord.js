import React, { Component } from 'react'

class HelloWorld extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }
  };

export default HelloWorld 

// we go to app.js to import



//   ReactDOM.render(<HelloWorld name="Tom" />)