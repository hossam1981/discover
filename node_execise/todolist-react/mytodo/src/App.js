import React, { Component } from 'react';
import './App.css';
import ListItems from "./ListItems"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  // ---adding items mirror input value
  // using ref={a=> this_inputElment =a}
  // we could use also e.target.value


  addItem = (e) => {
    //clear onClick from refreshing the page.
    e.preventDefault()
    if (this._inputElement.value !== "") {
      console.log(this._inputElement.value)
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
          // items: [...prevState.items, newItem]
        }
      })
    }
    //empty the input for the next one
    this._inputElement.value = "";
  }

  //------delete items usin filter() method--
  deleteItem = (key) => {
    const deletedItem = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: deletedItem
    })
  }

  // -----updating (overWrite) input text---
  //onChange={(e) => props.setUpdate(e.target.value, item.key)}

  setUpdate = (text, key) => {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
    })
    this.setState({
      items: items
    })
  }
  //---------------------------------------
  render() {

    return (
      <div className="App" >
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text"
              ref={(a) => this._inputElement = a} />
            <button>add</button>
          </form>
        </header>

        {/* // passing props to ListItems */}
        <ListItems enteries={this.state.items} deleteItem={this.deleteItem}
          setUpdate={this.setUpdate} />
      </div>
    );
  }
}

export default App;
