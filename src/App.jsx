import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/services/Services'
import MyWork from './Components/My Work/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import WorkExperience from './Components/WorkExperinece/WorkExperience'
import SkillsExperiences from './Components/Skills& Experinces/Skills&Eperiences'
import AchievementSummary from './Components/AcheivementSummary/AcheivementSummary'
import Skills from './Components/Skills/Skills'

const App = () => { 
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <AchievementSummary />
      <Skills />
      <SkillsExperiences />
      <WorkExperience />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
