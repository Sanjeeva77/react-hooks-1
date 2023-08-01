import React from 'react'
import { useState } from "react"

export const HookCounterThree = () => {
    const[name,setName]=useState({
        firstName:'',
        lastName:''
    })
    return (
        <div>
            <form>
                <input type='text' value={name.firstName}
                onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type='text' value={name.lastName}
                onChange={e=>setName({...name,lastName:e.target.value})}/>
                <h2>Your first name is :{name.firstName}</h2>
                <h2>Your Last name is :{name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}


//useState does not automatically merge and update the object
//This is the key difference to setState which you can come across in class components
//setState() will merge the state whereas useState() hook setter function will not 
//merge the state .You to have to do it manually
//use Spread operator to handle manula merge
//copy every property in the name object and then just override firstname field
//with a different value
