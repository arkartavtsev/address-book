import type { ComponentProps } from './_EditContact.types'

import { ContactForm } from '@/widgets'


export const EditContact = ({
  data
}: ComponentProps) => {
  return <>
    <ContactForm initialData={ data } />
  </>
}
