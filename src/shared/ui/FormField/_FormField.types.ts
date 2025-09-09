import type { InputHTMLAttributes } from 'react'


interface Field extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  icon?: React.ElementType
}

export interface ComponentProps {
  className?: string
  label: {
    text: string
    isHidden?: boolean
    className?: string
  }
  fields: Field[]
  as?: 'input' | 'textarea'
}
