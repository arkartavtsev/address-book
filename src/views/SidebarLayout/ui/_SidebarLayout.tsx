import {
  useNavigation,
  NavLink,
  Outlet
} from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_SidebarLayout.types.ts'

import { Search } from '@/widgets'

import { AddContact } from '@/features'

import { Link } from '@/shared/ui'

import styles from './_SidebarLayout.module.css'


export const SidebarLayout = ({
  contacts,
  searchQuery
}: ComponentProps) => {
  const navigation = useNavigation()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')


  return <>
    <div className={ styles.sidebar }>
      <div className={ classNames(styles.sidebarItem, styles.logoWrapper) }>
        <img
          className={ styles.logo }
          width={ 35 }
          src={ '/logo-mini.svg' }
          alt={ '' }
        />

        <Link to={ '/' }>
          React Router Contacts
        </Link>
      </div>

      <div className={ classNames(styles.sidebarItem, styles.controls) }>
        <Search searchQuery={ searchQuery } />

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

    <main
      className={classNames(
        styles.content,
        navigation.state === 'loading' && !isSearching && styles.content_isLoading
      )}
    >
      <Outlet />
    </main>
  </>
}
