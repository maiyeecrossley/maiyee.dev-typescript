import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useRef } from 'react'
import Home from "../Home/Home"
import AboutMe from "../AboutMe/AboutMe"
// import Projects from '../components/Projects/Projects'
import NavBar from "../NavBar/NavBar"
import styles from "./ParallaxLayout.module.css"

export default function ScrollPageLayout() {
  const parallaxRef = useRef<IParallax>(null)

  return (
    <>
      <NavBar parallaxRef={parallaxRef} />

      <Parallax ref={parallaxRef} pages={2} className={styles.parallax}>
        <ParallaxLayer offset={0} speed={0.9}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.9}>
          <AboutMe />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={2} speed={0.6}>
          <Projects />
        </ParallaxLayer> */}
      </Parallax>
    </>
  )
}