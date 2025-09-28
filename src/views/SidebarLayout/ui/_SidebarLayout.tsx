import {
  useNavigation,
  Outlet
} from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_SidebarLayout.types.ts'

import { Search } from '@/widgets'

import { AddContact } from '@/features'

import { Link } from '@/shared/ui'

import { Contacts } from './Contacts'

import styles from './_SidebarLayout.module.scss'


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

      <Contacts
        className={classNames(
          styles.sidebarItem,
          styles.sidebarItem_separated,
          styles.contacts
        )}
        data={ contacts }
      />
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
