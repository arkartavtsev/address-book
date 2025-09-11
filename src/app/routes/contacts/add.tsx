import { redirect } from 'react-router'

import type { Route } from '../contacts/+types/add'

import { createContact } from '../../data'

import { getMetaTitle } from '@/shared/helpers'

import { AddContactView } from '@/views'


export function meta() {
  return [ getMetaTitle('Add contact') ]
}


export async function action({
  request
}: Route.ActionArgs) {
  const formData = await request.formData()
  const newContactData = Object.fromEntries(formData)

  const newContact = await createContact(newContactData)

  return redirect(`/contacts/${ newContact.id }`)
}


export default function () {
  return <>
    <AddContactView />
  </>
}
