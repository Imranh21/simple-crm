import React from 'react'
import styles from '../Rightbar.module.scss'

const ProBox = ({bd: {title, number, color}}) => {
    return (
        <div className={styles.proBox}>
            <p>{title}</p>
            <div className={styles.numberBox}>
                <div style={{background: `${color}`}} className={styles.colored}></div>
                <h3>{number}</h3>
            </div>
            
        </div>
    )
}

export default ProBox
