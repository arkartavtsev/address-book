import { redirect } from 'react-router'

import type { Route } from '../contacts/+types/edit'

import {
  getContact,
  updateContact
} from '../../data'

import { EditContactView } from '@/views'


export async function loader({
  params
}: Route.LoaderArgs) {
  const contact = await getContact(params.contactId)

  if (!contact) {
    throw new Response('Not Found', { status: 404 })
  }

  return { contact }
}

export async function action({
  params,
  request,
}: Route.ActionArgs) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  await updateContact(params.contactId, updates)

  return redirect(`/contacts/${ params.contactId }`)
}


export default function ({
  loaderData
}: Route.ComponentProps) {
  const { contact } = loaderData


  return <>
    <EditContactView data={ contact } />
  </>
}
