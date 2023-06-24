import { useState } from 'react'
import './App.css'
import Banner from './Components/BannerSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
import WorkExperience from './Components/WorkExperienceSection'

function App() {
  const [currentMode, setMode] = useState('light')
  return (
    <div className='app'>
      <div className="app-content">
        <Header actualMode={currentMode} setState={setMode} />
        <Banner actualMode={currentMode}/>
        <WorkExperience actualMode={currentMode}/>
        <Footer actualMode={currentMode}/>
      </div>
    </div>
  )
}

export default App
