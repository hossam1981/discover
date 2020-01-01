import React, { Component } from 'react';
import ContactCard from './components/ContactCard'
import Decrement from './components/Decrement'
import Addition from './components/Addition'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
<h1><span>R</span>eact</h1>
<div class="Horizontal Line"></div><br />
           <ContactCard name = "Amar" email="Amar@test.com" 
            mobile=" 212-822-2222" work=" 212-822-7776" />
            <div class="Vertical Line"></div>

            <ContactCard name = "Eman" email="eman@test.com" 
            mobile=" 212-822-2222" work=" 212-555-2222" />
            <div class="Vertical Line"></div>

            <ContactCard name = "malak" email="malak@test.com" 
            mobile=" 212-822-2222" work=" 212-666-6565" />

            <Decrement num={5} /> 

            <div class="Vertical Line"></div>

            <Addition num1={4} num2={6} />

      </div>
    );
  }
}

export default App;
