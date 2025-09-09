import type { ContactRecord } from '@/app/data'


export interface ComponentProps {
  contacts: ContactRecord[]
  searchQuery: string | null
}
