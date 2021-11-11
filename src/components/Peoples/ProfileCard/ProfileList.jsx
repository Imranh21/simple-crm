import React, { useContext } from 'react'
import ProfileCard from './ProfileCard'
import { SimpleCRM } from '../../../context/ContextCRM'
import styles from './Profile.module.scss'


const ProfileList = () => {
    const {peoples, filteredData} = useContext(SimpleCRM)
    console.log(filteredData)
    return (
        <div className={styles.profileList}>
            
            {filteredData.map(people => (
                <ProfileCard key={people.id} people={people}/>
            ))}
            
        </div>
    )
}

export default ProfileList
