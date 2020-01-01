import React, { Component } from 'react'
import HelloWord from './components/HelloWord'
import MyCoolComponent from './components/MyCoolComponent'
import HelloFriend from './components/HelloFriend'
import ContactCard from './components/ContactCard'
import './App.css';
class App extends Component {
  render() {
    return (
       <div>
      <h1>Welcome to our react</h1>

      <p className="para"> We are learning react, jsx woohoo !!!</p>

      {/* referering the component HelloWord.js by <HelloWord/> */}

<HelloWord name ='james'/>
<HelloFriend />
<MyCoolComponent id={5} message='oh dear' />
<ContactCard />
 {/* js expression */}
      <h3> Total amount {2 + 2} </h3>

      </div>
    );
  }
}

export default App;
