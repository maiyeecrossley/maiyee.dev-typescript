import styles from "./Home.module.css";
import { Link } from "react-router";
import GithubIcon from '../../assets/github.png';
import LinkedInIcon from "../../assets/linkedin.png";

export default function Home() {
    return (
      <main className={styles.homeContainer}>
        <section className={styles.heroSection}>
          <h1>Mai-Yee Crossley</h1>
          <h4>Junior Software Engineer</h4>

            <div className={styles.socials}>
              <Link to="https://github.com/maiyeecrossley/" target="_blank"><img src={GithubIcon} width="40" alt="GitHub icon" /></Link>
              <Link to="https://www.linkedin.com/in/maiyeecrossley/" target="_blank"> <img src={LinkedInIcon} width="40" alt="LinkedIn icon" /></Link>
            </div>

        </section>
      </main>
      
    )
 }
