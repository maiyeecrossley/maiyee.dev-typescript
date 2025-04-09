import { ParallaxLayer } from '@react-spring/parallax'
import FloatingPetals from '../FloatingPetals/FloatingPetals'

type Props = {
  offset: number
}

export default function PetalLayer({ offset }: Props) {
  return (
    <ParallaxLayer offset={offset} speed={0.1} style={{ zIndex: 0, pointerEvents: 'none' }}>
      <FloatingPetals />
    </ParallaxLayer>
  )
}