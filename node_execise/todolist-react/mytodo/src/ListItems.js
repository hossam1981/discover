import React from 'react'
import "./ListItems.css"
import FlipMove from 'react-flip-move';
// npm i -s flip-move-react

export default function ListItems(props) {

    const items = props.enteries
    console.log(items)
    const listitems = items.map(item => {
        return <div className="theList" key={item.key}>
            <input type="text" id={item.key} value={item.text}
                {...console.log("key" + item.key)}
                onChange={(e) => props.setUpdate(e.target.value, item.key)}
            />
            <span className="trash"
                onClick={() => props.deleteItem(item.key)}>
                X
            </span>
        </div>
    })
    return (
        <div>
            <FlipMove duration={250} easing="ease-out">
                {listitems}
            </FlipMove>
        </div>
    )
}
