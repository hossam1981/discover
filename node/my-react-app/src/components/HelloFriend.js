import React, { Component } from 'react';

class HelloFriend extends Component {
    constructor(props) {
      // props.name is default data; in our first example we passed in 'David'
      // need to call super(props) when using 'this' in constructor
      super(props);
      this.state = {
        name: props.name
      }
      setTimeout(this.updateName.bind(this), 2000)
    }
    updateName() {
        this.setState({name: 'Jeff'});
}
    render() {
      return <h1>Hello {this.state.name}!</h1>
} };

export default HelloFriend