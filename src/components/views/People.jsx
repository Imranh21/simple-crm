import React, { useEffect } from 'react'
import useTeam from '../../hooks/useTeam'
import AllData from '../../data/allData'
import SearchBar from '../Peoples/Search/SearchBar'
import ProfileList from '../Peoples/ProfileCard/ProfileList'
import AddPeopleBtn from '../Peoples/NewPeople/AddPeopleBtn'
import NumOfPeople from '../Peoples/NumPeople/NumOfPeople'

const People = () => {
    const {peoples} = AllData
    // console.log(peoples)
    useEffect(() => {
    console.log(peoples)

    }, [])
    return (
        <div>
            <NumOfPeople />
            <AddPeopleBtn />
            <SearchBar />
            <ProfileList />
            {/* {peoples.map(p => (
                <div key={p.id}>
                    {p.name}
                </div>
            ))} */}
        </div>
    )
}

export default People
