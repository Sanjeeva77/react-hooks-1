import React, { useContext } from 'react'
// import { UserContext,CompanyContext} from '../App'
import { CountContext } from '../App'

export const ComponentF = () => {
    const countContext=useContext(CountContext)
    return (
        <div>
            Component F - {countContext.countState}
            {/* <UserContext.Consumer>
            {
                user=>{
                    return(
                        <CompanyContext.Consumer>
                            {
                                company=><div>User Context Value {user} ,
                                Company Context Value {company}</div>
                            }
                        </CompanyContext.Consumer>
                    )
                }
            }
            </UserContext.Consumer> */}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
