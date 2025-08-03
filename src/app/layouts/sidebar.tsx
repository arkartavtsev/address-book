import { useEffect } from 'react'
import {
  useNavigation,
  useNavigate,
  useSubmit,
  Form,
  Link,
  NavLink,
  Outlet
} from 'react-router'
import type { Route } from './+types/sidebar'

import { getContacts } from '../data'


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
  const navigate = useNavigate()
  const submit = useSubmit()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')


  const handleSearchFormChange = ( evt: React.FormEvent<HTMLFormElement> ) => {
    const isFirstSearch = searchQuery === null

    submit(evt.currentTarget, { replace: !isFirstSearch })
  }

  const handleNewButtonClick = () => {
    navigate('/add-contact')
  }


  useEffect(() => {
    const searchField = document.getElementById('q')

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
          <input
            id={ 'q' }
            className={ isSearching ? 'loading' : ''}
            name={ 'q' }
            type={ 'search' }
            defaultValue={ searchQuery || '' }
            placeholder={ 'Search' }
            aria-label={ 'Search contacts' }
          />

          <div
            id={ 'search-spinner' }
            hidden={ !isSearching }
            aria-hidden
          />
        </Form>

        <button
          type={ 'button' }
          onClick={ handleNewButtonClick }
        >
          New
        </button>
      </div>

      <nav>
        {
          contacts.length ? <>
            <ul>
              {
                contacts.map(( contact ) => (
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
