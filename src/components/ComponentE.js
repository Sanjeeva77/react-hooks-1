import React from 'react'
import { ComponentF } from './ComponentF'
import { useContext } from 'react'
import {UserContext,CompanyContext} from '../App'

export const ComponentE = () => {
    const user=useContext(UserContext)
    const company=useContext(CompanyContext)
    return (
        <div>
            <ComponentF/>
            {/* {user} - {company} */}
        </div>
    )
}
