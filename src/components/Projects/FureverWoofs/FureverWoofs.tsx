import styles from "./FureverWoofs.module.css"
import { Link } from "react-router"

export default function FureverWoofs() {
    return (

        <main className={styles.fureverWoofsContainer}>
            <section className={styles.heroSection}>
                <h4><Link to="https://furever-woofs.netlify.app/" target="_blank">FurEver Woofs</Link></h4>
                <div className={styles.fureverWoofsContent}>

                </div>
            </section>
        </main>

    )
}