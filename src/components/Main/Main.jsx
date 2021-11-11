import React from 'react'
import styles from './Main.module.scss'
import { Route, Routes, Navigate } from 'react-router-dom'
import People from '../views/People'
import Teams from '../views/Teams'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {BiBell} from 'react-icons/bi'

const Main = () => {
    return (
        <div className={styles.mainSection}>
            <div className={styles.container}>
                <div className={styles.navIcons}>
                    <div className={styles.iconBox}>
                        <HiOutlineMenuAlt1 className={styles.icon}/>
                    </div>
                    <div className={styles.iconBox}>
                        <BiBell className={styles.icon}/>
                    </div>
                </div>   
                <Routes>
                    <Route path="/" element={<Navigate to="/peoples" replace={true} />} />

                    <Route path="/peoples" element={<People />} />
                    <Route path="/teams" element={<Teams />} />
                </Routes>
            </div>
            
        </div>
    )
}

export default Main
