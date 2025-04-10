import styles from "./BlossomToPowder.module.css"
import { Link } from "react-router"

export default function BlossomToPowder() {
    return (

        <main className={styles.blossomContainer}>
            <section className={styles.heroSection}>
                <h4><Link to="https://blossom-to-powder.netlify.app/" target="_blank">Blossom To Powder</Link></h4>
                <div className={styles.blossomContent}>

                </div>
            </section>
        </main>

    )
}