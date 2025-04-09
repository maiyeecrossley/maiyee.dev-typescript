import { ParallaxLayer } from '@react-spring/parallax'
import { ReactNode } from 'react'

type Props = {
  offset: number
  children: ReactNode
}

export default function SectionLayer({ offset, children }: Props) {
  return (
    <ParallaxLayer offset={offset} speed={0.8} style={{ zIndex: 2 }}>
      {children}
    </ParallaxLayer>
  )
}