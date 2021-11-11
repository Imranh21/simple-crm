import { useState, useEffect } from 'react'
import './App.module.scss'
import Leftbar from './components/Leftbar/Leftbar'
import Rightbar from './components/Rightbar/Rightbar'
import Main from './components/Main/Main'
import AllData from './data/allData'
import { check } from './check'
import useTeam from './hooks/useTeam'
import { BrowserRouter } from 'react-router-dom'

function App() {
  // const {frontEndTeam, backEndTeam, UIUXTeam} = useTeam()
  // console.log(frontEndTeam)
  // console.log(backEndTeam)
  // console.log(UIUXTeam)

  
  return (
    <BrowserRouter>
    <div className="App">
      <Leftbar />
      <Main />
      <Rightbar />
      
    </div>
    </BrowserRouter>
  )
}

export default App
