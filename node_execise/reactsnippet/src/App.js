import React, { useState } from 'react';
import './App.css';
import initialList from './listData'


const App = () => {
  const [list, setList] = useState(initialList)

  const handleRemove = (id) => {
    const filterItem = list.filter(item => item.id !== id)
    setList(filterItem)
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <span> {item.fristname}  </span>
          <span> {item.lastname}  </span>
          <span> {item.year} </span>
          <button type="button" onClick={() =>
            handleRemove(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
