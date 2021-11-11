import React, { useContext } from 'react'
import { SimpleCRM } from '../../../context/ContextCRM'

const NumOfPeople = () => {
    const {peoples} = useContext(SimpleCRM)
    return (
        <div style={{margin: "2rem 0"}}>
            <div>
                <h1 style={{fontSize: "1.8rem", fontWeight: "700", color: "rgb(9, 10, 65))"}}>{peoples.length} People</h1>
            </div>
        </div>
    )
}

export default NumOfPeople
