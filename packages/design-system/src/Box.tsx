import * as React from 'react'
import { LiteralUnion } from 'type-fest'

import { Colors, Spacings } from './index'

export interface BoxProps {
  padding?: keyof Spacings | number
  backgroundColor?: LiteralUnion<keyof Colors, string>
  color?: LiteralUnion<keyof Colors, string>
  children: React.ReactNode
}

export function Box({ backgroundColor, color, children }: BoxProps) {
  return <div style={{ backgroundColor, color }}>{children}</div>
}
