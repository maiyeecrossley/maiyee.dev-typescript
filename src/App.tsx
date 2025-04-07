import './App.css'
import { useRef } from 'react'
import NavBar from './components/NavBar/NavBar'


import Home from "./components/Home/Home"
import AboutMe from './components/AboutMe/AboutMe'

export function App() {
  
  const aboutRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)

  const scrollToHome = () => homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
    <NavBar scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} />
    
      <main>
        <Home ref={homeRef} />
        <AboutMe ref={aboutRef} />
      </main>
    </>
  )
}

export default App
