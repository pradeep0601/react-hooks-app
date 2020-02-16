import React, {useState} from 'react'

const Item = () => {
    const [items, setItem] = useState([]);

    const addItem = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) + 1
        }]);
    }
    return (
        <div>
            <h3>useState with array</h3>
            <button onClick = {addItem}>Add Item</button>
            <h4>Items</h4>
            <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Item
