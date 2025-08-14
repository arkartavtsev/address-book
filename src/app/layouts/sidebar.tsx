import { useEffect } from 'react'
import {
  useNavigation,
  useSubmit,
  Form,
  Link,
  NavLink,
  Outlet
} from 'react-router'

import type { Route } from './+types/sidebar'

import { getContacts } from '../data'

import { AddContact } from '@/features'

import { FormField } from '@/shared/ui'
import {
  ArrowCycleIcon,
  MagnifierIcon
} from '@/shared/icons'


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


export default function SidebarLayout({
  loaderData,
}: Route.ComponentProps) {
  const {
    contacts,
    searchQuery
  } = loaderData

  const navigation = useNavigation()
  const submit = useSubmit()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')


  const LoadingIcon = () => <ArrowCycleIcon className={ isSearching ? 'search-spinner' : undefined } />


  const handleSearchFormChange = ( evt: React.FormEvent<HTMLFormElement> ) => {
    const isFirstSearch = searchQuery === null

    submit(evt.currentTarget, { replace: !isFirstSearch })
  }


  useEffect(() => {
    const searchField = document.querySelector('input[name="q"]')

    if (searchField instanceof HTMLInputElement) {
      searchField.value = searchQuery || ''
    }
  }, [ searchQuery ])


  return <>
    <div id='sidebar'>
      <h1>
        <Link to='/'>
          React Router Contacts
        </Link>
      </h1>

      <div>
        <Form
          id={ 'search-form' }
          role={ 'search' }
          onChange={ handleSearchFormChange }
        >
          <FormField
            label={{
              text: 'Search contacts',
              isHidden: true
            }}
            fields={[
              {
                name: 'q',
                type: 'search',
                placeholder: 'Search',
                defaultValue: searchQuery || '',
                icon: isSearching ? LoadingIcon : MagnifierIcon
              }
            ]}
          />
        </Form>

        <AddContact />
      </div>

      <nav>
        {
          contacts.length ? <>
            <ul>
              {
                contacts
                  .sort(
                    (a, b) => `${ a.first } ${ a.last }`.localeCompare(`${ b.first } ${ b.last }`)
                  ).map(( contact ) => (
                  <li key={ contact.id }>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? 'active'
                          : isPending ? 'pending'
                            : ''
                      }
                      to={ `contacts/${ contact.id }`}
                    >
                      {
                        contact.first || contact.last ? <>
                          { contact.first } { contact.last }
                        </> : <>
                          <i>No Name</i>
                        </>
                      }

                      {
                        contact.favorite ? <>
                          <span>★</span>
                        </> : null
                      }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </> : <>
            <p>
              <i>No contacts</i>
            </p>
          </>
        }
      </nav>
    </div>

    <div
      id={ 'detail' }
      className={ navigation.state === 'loading' && !isSearching ? 'loading' : '' }
    >
      <Outlet />
    </div>
  </>
}
