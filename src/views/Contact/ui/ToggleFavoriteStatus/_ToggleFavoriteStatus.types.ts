import type { ContactRecord } from '@/app/data'


export interface ComponentProps {
  className?: string
  initialState: ContactRecord['favorite']
}
