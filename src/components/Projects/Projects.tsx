import styles from "./Projects.module.css"
import Alpacacaca from "./Alpacacaca/Alpacacaca"
import FureverWoofs from "./FureverWoofs/FureverWoofs"
import StickyPopcorn from "./StickyPopcorn/StickyPopcorn"
import BlossomToPowder from "./BlossomToPowder/BlossomToPowder"

export default function Projects() {
    return (

        <main className={styles.projectsContainer}>
            <section className={styles.heroSection}>
                <h2>Projects</h2>
                <div className={styles.projectsContent}>
                    <Alpacacaca />
                    <FureverWoofs />
                    <StickyPopcorn />
                    <BlossomToPowder />

                </div>
            </section>
        </main>
    )
}