import type { Route } from './+types/contact'

import {
  getContact,
  updateContact
} from '../../data'

import { ContactView } from '@/views'


export function meta({ loaderData }: Route.ComponentProps) {
  const { contact } = loaderData
  const { first, last } = contact

  return [
    { title: `${ first } ${ last } | React Router Contacts` }
  ]
}


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
  request
}: Route.ActionArgs) {
  const formData = await request.formData()

  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true'
  })
}


export default function ({
  loaderData,
}: Route.ComponentProps) {
  const { contact } = loaderData


  return <>
    <ContactView data={ contact } />
  </>
}
