import React from 'react'
import styles from './Leftbar.module.scss'
import { NavLink } from 'react-router-dom'
import CustomLink from './CustomLink'
import { AllLinks } from './data'

const Leftbar = () => {
    
    return (
        <div className={styles.leftSection}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <p>Simple CRM</p>
                </div>
                <div className={styles.linkContainer}>
                    {AllLinks.map(link => (
                        <CustomLink className={styles.link} key={link.id} to={link.to}>
                            <div className={styles.activeStyle}>{link.title}</div>
                        </CustomLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Leftbar
