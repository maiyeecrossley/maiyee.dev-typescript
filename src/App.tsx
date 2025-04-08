import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import FloatingPetals from './components/FloatingPetals/FloatingPetals'

export default function App() {
  const parallaxRef = useRef<IParallax | null>(null)

  return (
    <>
      <NavBar parallaxRef={parallaxRef} />

      <Parallax ref={parallaxRef} pages={2} style={{ height: '100vh' }}>

      <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 0, pointerEvents: 'none' }}>
        <FloatingPetals />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.6} style={{ zIndex: 2 }}>
          <Home />
        </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1} style={{ zIndex: 0, pointerEvents: 'none' }}>
        <FloatingPetals />
      </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6} style={{ zIndex: 2 }}>
          <AboutMe />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}