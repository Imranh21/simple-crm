import React from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import styles from './AddPeopleBtn.module.scss'

const AddPeopleBtn = () => {
    return (
        <div className={styles.newBtnContainer}>
            <div className={styles.btn}>
                <div className={styles.icon}>
                    <AiOutlineUserAdd />
                </div>
                <p>New people</p>
            </div>
        </div>
    )
}

export default AddPeopleBtn
