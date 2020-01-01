import './App.css';
import ListItems from './ListItems'
import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// https://www.youtube.com/watch?v=N8kYlimhuLw&list=TLPQMDcwODIwMjB0dpiGSS8OMQ&index=1

library.add(faTrash)

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }

  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem = (key) => {
    const filterItem = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filterItem
    })

  }
  setUpdate = (text, key) => {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type="submit">add</button>
          </form>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
        </header>
      </div>
    )
  }
}

export default App

