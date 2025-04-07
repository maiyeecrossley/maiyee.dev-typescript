import styles from "./AboutMe.module.css"
import { forwardRef } from "react"

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
    return (
      <main className={styles.aboutMeContainer}>
        <section className={styles.heroSection} ref={ref}>
          <h1>About Me</h1>
          <div>
          <p>
            Hello! I'm Mai-Yee, but please, call me Mai (pronounced 'May')!<br />
            I'm a qualified Dispensing Optician turned Full-Stack Developer.<br />
            After years of working with patients and using clunky software, <br />
            I've come to realise that tech should empower people, not frustrate them. <br />
            This is what has inspired me to make the leap into software engineering; <br />
            To be able to make something out of nothing
          </p>
          </div>
        </section>
      </main>
    )
  })
  
  export default AboutMe