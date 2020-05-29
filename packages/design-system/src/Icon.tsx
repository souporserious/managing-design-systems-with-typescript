import * as React from 'react'
import { LiteralUnion } from 'type-fest'

import { Colors } from './index'

export interface IconProps {
  color?: LiteralUnion<keyof Colors, string>
  children: React.ReactNode
}

export function Icon({ color, children }: IconProps) {
  return <svg style={{ fill: color }}>{children}</svg>
}
