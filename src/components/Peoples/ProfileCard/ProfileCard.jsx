import React from 'react'
import styles from './Profile.module.scss'
import {CgWorkAlt} from 'react-icons/cg'

const ProfileCard = ({people: {name, job_title, image, phone, gender}}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgBox}>
                {gender == "male" ? <img src='/images/boy.png' /> : <img src='/images/girl.png' />}
                
            </div>
            <p className={styles.name}>{name}</p>
            <div className={styles.jobTitle}>
                <CgWorkAlt />
                <p>{job_title}</p>
            </div>
        </div>
    )
}

export default ProfileCard
