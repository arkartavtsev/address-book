import { redirect } from 'react-router'

import type { Route } from '../contacts/+types/add'

import { createContact } from '../../data'

import { AddContactView } from '@/views'


export function meta() {
  return [
    { title: 'Add contact | React Router Contacts' }
  ]
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
