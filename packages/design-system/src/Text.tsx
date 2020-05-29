import * as React from 'react'
import { LiteralUnion } from 'type-fest'

import { Colors, TextVariants } from './index'

export interface TextProps {
  backgroundColor?: LiteralUnion<keyof Colors, string>
  color?: LiteralUnion<keyof Colors, string>
  variant?: keyof TextVariants
  children: React.ReactNode
}

export function Text({ backgroundColor, color, children }: TextProps) {
  return <span style={{ backgroundColor, color }}>{children}</span>
}
