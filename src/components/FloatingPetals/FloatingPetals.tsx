import styles from './FloatingPetals.module.css'
import petal from '../../assets/petal.png'
import petalStyles from "./PetalStyles"

export default function PetalLayer() {
  return (
    <div className={styles.petalLayer}>
      {petalStyles.map((style, i) => (
        <img
          key={i}
          src={petal}
          alt="cherry blossom petal"
          className={styles.petal}
          style={{
            top: style.top,
            left: style.left,
            width: style.width,
            transform: `rotate(${style.rotate})`,
            position: 'absolute'
          }}
        />
      ))}
    </div>
  )
}