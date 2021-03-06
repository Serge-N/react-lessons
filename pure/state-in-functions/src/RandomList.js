import React, { useState } from "react";

function RandomList() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items, {
                id: items.length,
                value: (Math.random() * 100).toPrecision(4)
            }
        ]);
    };

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value} USD</li>
                ))}
            </ul>
        </>
    );
}

export default RandomList;