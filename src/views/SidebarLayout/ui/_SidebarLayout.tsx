import { useEffect } from 'react'
import {
  useNavigation,
  useSubmit,
  Form,
  NavLink,
  Outlet
} from 'react-router'
import classNames from 'classnames'

import styles from './_SidebarLayout.module.css'

import type { ComponentProps } from './_SidebarLayout.types.ts'

import { AddContact } from '@/features'

import {
  Link,
  FormField
} from '@/shared/ui'
import {
  ArrowCycleIcon,
  MagnifierIcon
} from '@/shared/icons'


export const SidebarLayout = ({
  contacts,
  searchQuery
}: ComponentProps) => {
  const navigation = useNavigation()
  const submit = useSubmit()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')


  const LoadingIcon = () => <ArrowCycleIcon className={ styles.loadingIcon } />


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
    <div className={ styles.sidebar }>
      <h1 className={ classNames(styles.sidebarItem, styles.title) }>
        <img
          className={ styles.titleLogo }
          width={ 35 }
          src={ 'logo-mini.svg' }
          alt={ '' }
        />

        <Link to={ '/' }>
          React Router Contacts
        </Link>
      </h1>

      <div className={ classNames(styles.sidebarItem, styles.controls) }>
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

      <div className={classNames(
        styles.sidebarItem,
        styles.sidebarItem_separated,
        styles.contactsWrapper
      )}>
        {
          contacts.length ? <>
            <nav>
              <ul className={ styles.contactsList }>
                {
                  contacts
                    .sort(
                      (a, b) => `${ a.first } ${ a.last }`.localeCompare(`${ b.first } ${ b.last }`)
                    ).map(( contact ) => (
                      <li
                        key={ contact.id }
                        className={ styles.contactItem }
                      >
                        <NavLink
                          className={ styles.contactLink }
                          to={ `contacts/${ contact.id }` }
                        >
                          {
                            contact.first || contact.last ? <>
                              { `${ contact.first } ${ contact.last }`.trim() }
                            </> : <>
                              No Name
                            </>
                          }

                          {
                            contact.favorite && <>
                              <span className={ styles.contactFavoriteMark }>★</span>
                            </>
                          }
                        </NavLink>
                      </li>
                    ))
                }
              </ul>
            </nav>
          </> : <>
            <p className={ styles.emptyMessage }>
              No contacts
            </p>
          </>
        }
      </div>
    </div>

    <div
      className={classNames(
        styles.content,
        navigation.state === 'loading' && !isSearching && styles.content_isLoading
      )}
    >
      <Outlet />
    </div>
  </>
}
