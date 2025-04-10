import { Parallax, IParallax } from '@react-spring/parallax'
import { useRef } from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import PetalLayer from './PetalLayer'
import SectionLayer from './SectionLayer'
import styles from './ParallaxLayout.module.css'

export default function ParallaxLayout() {
  const parallaxRef = useRef<IParallax>(null)

  return (
    <>
      <NavBar parallaxRef={parallaxRef} />
      
      <Parallax ref={parallaxRef} pages={3} className={styles.parallax}>
        <PetalLayer offset={0} />
        <SectionLayer offset={0}>
          <Home />
        </SectionLayer>

        <PetalLayer offset={1} />
        <SectionLayer offset={1}>
          <AboutMe />
        </SectionLayer>

        <PetalLayer offset={2} />
        <SectionLayer offset={2}>
          <Projects />
        </SectionLayer>
      </Parallax>
    </>
  )
}