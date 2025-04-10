import styles from "./StickyPopcorn.module.css"
import { Link } from "react-router"

export default function StickyPopcorn() {
    return (

        <main className={styles.stickyPopcornContainer}>
            <section className={styles.heroSection}>
            <h4><Link to="https://stickypopcorn-moviereviews.netlify.app/" target="_blank">Sticky Popcorn</Link></h4>
                <div className={styles.stickyPopcornContent}>

                </div>
            </section>
        </main>

    )
}