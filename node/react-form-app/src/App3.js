import React, { Component } from 'react';
import ReactDom from 'react-dom'
import Messages from './components/Messages'
import AddNums from './components/AddNums'
import AddNumRef from './components/AddNumRef'
import AddressBook from './components/AddressBook'
// import AddressBook2 from './components/AddressBook2'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
<nav>
        <button onClick={this.handleOpenMessages}>Go to Messages</button>
        <button onClick={this.handleOpenAddNumRef}>Go to AddNumRef</button>
        <button onClick={this.handleOpenAddressBook}>Go to AddressBook</button>
</nav>
        {/* -----components ----*/}
        <Messages />
        <AddNums />
        <AddNumRef />
        <AddressBook />

         {/* <AddressBook2 /> */}
   
      </div>
    );
  }
// add ReactDom in able to to it frtom this page directly
handleOpenMessages=()=>{
  ReactDom.render(<Messages />, document.getElementById('root'))
   }


handleOpenAddNumRef=()=>{
  ReactDom.render(<AddNumRef />, document.getElementById('root'))
   }


  }

export default App;
