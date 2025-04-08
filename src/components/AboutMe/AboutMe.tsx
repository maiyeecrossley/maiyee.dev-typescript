import styles from "./AboutMe.module.css"
import waveImg from '../../assets/wave-2.png'

export default function AboutMe() {
    return (

      <main className={styles.aboutMeContainer}>
        <section className={styles.heroSection}>
          <h1>About Me</h1>
          <div className={styles.aboutMeContent}>
            <img src={waveImg} className={styles.aboutMeImg} alt="profile image of Mai as an illustration"></img>
            <p>
            Hello! I'm Mai-Yee, but please, call me Mai (pronounced 'May')!<br />
            I'm a qualified Dispensing Optician, turned Full-Stack Developer.<br />
            After years of working with patients and using clunky software, <br />
            I've come to realise that tech should empower people, not frustrate them. <br />
            This is what has inspired me to make the leap into software engineering; <br />
            <span>To be able to make something out of nothing.</span>
          </p>
          </div>
        </section>
      </main>
    )
  }
  
