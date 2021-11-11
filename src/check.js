import AllData from "./data/allData"

export const check = () => {
    const {peoples} = AllData
    const frontend_team = []
    const backend_team = []
    peoples.map(peo => {
        if(peo.job_title == "Frontend"){
            frontend_team.push(peo)
        } else if(peo.job_title == "Backtend"){
            backend_team.push(peo)
        }
    })
    return {frontend_team, backend_team}
}