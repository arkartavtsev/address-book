import type { Route } from './+types/sidebar'

import { getContacts } from '../data'

import { SidebarLayoutView } from '@/views'


export async function loader({
  request
}: Route.LoaderArgs) {
  const url = new URL(request.url)
  const searchQuery = url.searchParams.get('q')

  const contacts = await getContacts(searchQuery)

  return {
    contacts,
    searchQuery
  }
}


export default function ({
  loaderData,
}: Route.ComponentProps) {
  return <>
    <SidebarLayoutView { ...loaderData } />
  </>
}
