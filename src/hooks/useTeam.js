import {useEffect, useState} from 'react'
import AllData from '../data/allData'

const useTeam = () => {
    const [frontEndTeam, setFrontEndTeam] = useState([])
    const [backEndTeam, setBackEndTeam] = useState([])
    const [UIUXTeam, setUIUXTeam] = useState([])
    const {peoples} = AllData

    const fetchTeamFrontend = () => {
        const frontendTeam = peoples.filter(data => {
            return data.job_title.includes("Frontend")
        })
        setFrontEndTeam(frontendTeam)
    }
    const fetchTeamBackend = () => {
        const backendTeam = peoples.filter(data => {
            return data.job_title.includes("Backend")
        })
        setBackEndTeam(backendTeam)
    }

    const fetchUIDeveloper = () => {
        const UITeam = peoples.filter(data => {
            return data.job_title.includes("UI/UX")
        })
        setUIUXTeam(UITeam)
    }
    useEffect(() => {
        fetchTeamBackend()
        fetchTeamFrontend()
        fetchUIDeveloper()
    }, [])
    return {frontEndTeam, backEndTeam, UIUXTeam}
}

export default useTeam