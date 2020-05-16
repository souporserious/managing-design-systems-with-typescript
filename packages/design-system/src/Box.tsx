import * as React from 'react'
import { LiteralUnion } from 'type-fest'

import { Colors } from './index'

export interface BoxProps {
  backgroundColor?: LiteralUnion<keyof Colors, string>
  color?: LiteralUnion<keyof Colors, string>
  children: React.ReactNode
}

export function Box({ backgroundColor, color, children }: BoxProps) {
  return <div style={{ backgroundColor, color }}>{children}</div>
}
