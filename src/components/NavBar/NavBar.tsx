import styles from "./NavBar.module.css";

type NavBarProps = {
  scrollToHome: () => void;
  scrollToAbout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToHome, scrollToAbout }) => {
  return (
    <nav className={styles.navbar}>
      <a onClick={scrollToHome} className={styles.navLink}>Home</a>
      <a onClick={scrollToAbout} className={styles.navLink}>About Me</a>
    </nav>
  )
}

export default NavBar