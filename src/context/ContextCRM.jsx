import React, { createContext, useState } from 'react'
import useTeam from '../hooks/useTeam'
import peoples from '../data/allData'


export const SimpleCRM = createContext()

const ContextCRM = ({children}) => {
    const [filteredData, setFilteredData] = useState(peoples)
    // const [filteredBySearch, setFilteredBySearch] = useState(peoples)

    // const filterBySearch = (value) => {
    //     const updatedList = peoples.filter(el => {
    //         if(value == ""){
    //             return value
    //         } else if (value.name
    //             .toLowerCase()
    //             .includes(searchField.toLocaleLowerCase())
    //         ){
    //             return value
    //         }
    //     })
    //     setFilteredBySearch(updatedList)
    // }

    const filterCategory = (value) => {
        
        if(value == "all"){
            setFilteredData(peoples)
        } else {
            const updatedList = peoples.filter(el => el.category == value)
            setFilteredData(updatedList)
        }
    }
    
    return (
        <SimpleCRM.Provider value={{peoples, filterCategory, filteredData}}>
            {children}
        </SimpleCRM.Provider>
    )
}

export default ContextCRM
