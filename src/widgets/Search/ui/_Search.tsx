import { useEffect } from 'react'
import {
  useNavigation,
  useSubmit,
  Form
} from 'react-router'

import type { ComponentProps } from './_Search.types.ts'

import { FormField } from '@/shared/ui'
import {
  ArrowCycleIcon,
  MagnifierIcon
} from '@/shared/icons'

import styles from './_Search.module.css'


export const Search = ({
  className,
  searchQuery
}: ComponentProps) => {
  const navigation = useNavigation()
  const submit = useSubmit()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')
  

  const handleFormChange = ( evt: React.FormEvent<HTMLFormElement> ) => {
    const isFirstSearch = searchQuery === null

    submit(evt.currentTarget, { replace: !isFirstSearch })
  }


  const LoadingIcon = () => <ArrowCycleIcon className={ styles.loadingIcon } />


  useEffect(() => {
    const searchField = document.querySelector('input[name="q"]')

    if (searchField instanceof HTMLInputElement) {
      searchField.value = searchQuery || ''
    }
  }, [ searchQuery ])


  return <>
    <search className={ className }>
      <Form onChange={ handleFormChange }>
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
              autoComplete: 'off',
              defaultValue: searchQuery || '',
              icon: isSearching ? LoadingIcon : MagnifierIcon
            }
          ]}
        />
      </Form>
    </search>
  </>
}
