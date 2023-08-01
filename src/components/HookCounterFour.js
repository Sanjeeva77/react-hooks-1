import React,{useState} from 'react'

export const HookCounterFour = () => {
    const[items,setItems]=useState([])
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            //random number bt 1 to 10
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item=>(<li>{item.value}</li>))
                }
            </ul>
        </div>
    )
}
