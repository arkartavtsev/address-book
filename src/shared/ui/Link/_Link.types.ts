import type { ReactNode } from 'react'


export interface ComponentProps {
  className?: string
  isExternal?: boolean
  to: string
  children: ReactNode
}
