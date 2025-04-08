import styles from './FloatingPetals.module.css'
import petal from "../../assets/petal.png"

export default function PetalLayer() {
    const petals = Array.from({ length: 20 })
  
    return (
      <div className={styles.petalLayer}>
        {petals.map((_, i) => (
          <img
            key={i}
            src={petal}
            alt="cherry blossom petal"
            className={styles.petal}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${28 + Math.random() * 36}px`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>
    )
  }