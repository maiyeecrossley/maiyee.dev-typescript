import { IParallax } from '@react-spring/parallax'
import styles from './NavBar.module.css'

type NavBarProps = {
  parallaxRef: React.RefObject<IParallax | null>
}

export default function NavBar({ parallaxRef }: NavBarProps) {
  const scrollTo = (offset: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    parallaxRef.current?.scrollTo(offset)
  }

  return (
    <nav className={styles.navbar}>
          <a href="#" onClick={scrollTo(0)}>Home</a>
          <a href="#" onClick={scrollTo(1)}>About Me</a>
          {/* <a href="#" onClick={scrollTo(2)}>Projects</a> */}
    </nav>
  )
}