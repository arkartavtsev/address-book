import type { ComponentProps } from './_EditContact.types'

import { ContactForm } from '@/widgets'


export const EditContact = ({
  data
}: ComponentProps) => {
  return <>
    <ContactForm
      title={ 'Edit contact' }
      initialData={ data }
    />
  </>
}
