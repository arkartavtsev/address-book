import type {
  ButtonHTMLAttributes,
  ReactNode
} from 'react'


export interface ComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  modifiers?: ('danger')[]
  children: ReactNode
}
