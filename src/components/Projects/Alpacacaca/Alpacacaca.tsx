import styles from "./Alpacacaca.module.css"
import { Link } from "react-router"

export default function Alpacacaca() {
    return (

        <main className={styles.alpacacacaContainer}>
            <section className={styles.heroSection}>
                <h4><Link to ="https://maiyeecrossley.github.io/alpacacaca-game/" target="_blank">Alpacacaca Game</Link></h4>
                <div className={styles.alpacacacaContent}>

                </div>
            </section>
        </main>

    )
}