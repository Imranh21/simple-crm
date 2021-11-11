import React from 'react'
import styles from './Rightbar.module.scss'
import { BoxData } from './Statistics/boxData'
import ProBox from './Statistics/ProBox'
import {BiNotification} from 'react-icons/bi'


const Rightbar = () => {
    return (
        <div className={styles.rightSection}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <div className={styles.iconBox}>
                        <BiNotification />
                    </div>
                </div>
                <div className={styles.head}>
                    <h3>Statistics</h3>
                </div>
                <div className={styles.percent}>
                    <div className={styles.box}>
                        <div className={styles.box2}>
                            <div className={styles.box3}>
                                <p>Time log</p>
                                <h3>80%</h3>
                                <p className={styles.increase}>+25%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.proContainer}>
                    <div className={styles.head}>
                        <h3>Projects</h3>
                    </div>
                    <div className={styles.proBoxContainer}>
                        {BoxData.map(bd => (
                            <ProBox key={bd.id} bd={bd} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
