import React, { useState, useContext } from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {GoSettings} from 'react-icons/go'
import styles from './Search.module.scss'
import { SimpleCRM } from '../../../context/ContextCRM'


const SearchBar = () => {
    const [selected, setSelected] = useState("")
    const {filterCategory} = useContext(SimpleCRM)

    const selectOnChangeHandler = (e) => {
        // setSelected(e.target.value)
        filterCategory(e.target.value)

    }

    
    console.log(selected)
    return (
        <div className={styles.searchSection}>
            <div className={styles.inputBar}>
                <RiSearch2Line className={styles.icon} />
                <input placeholder="search person"  />
            </div>
            <div className={styles.selectBar}>
                <select onChange={selectOnChangeHandler}>
                    <option value="all">All</option>
                    <option value="frontend">Frontend Developers</option>
                    <option value="backend">Backend Developers</option>
                    <option value="uiux">UI/UX Developers</option>
                    <option value="webdesign">Web Designer</option>
                </select>
                <span className={styles.arrow}>
                    <GoSettings />
                </span>
            </div>
        </div>
    )
}

export default SearchBar
