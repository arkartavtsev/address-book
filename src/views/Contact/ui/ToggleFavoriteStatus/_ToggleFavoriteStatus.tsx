import { useFetcher } from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_ToggleFavoriteStatus.types.ts'

import styles from './_ToggleFavoriteStatus.module.scss'


export const ToggleFavoriteStatus = ({
  className,
  initialState
}: ComponentProps) => {
  const fetcher = useFetcher()

  const isFavorite = fetcher.formData
    ? fetcher.formData.get('favorite') === 'true'
    : initialState


  return <>
    <fetcher.Form
      className={ classNames(className, styles.root) }
      method={ 'post' }
    >
      <button
        className={ styles.button }
        name={ 'favorite' }
        value={ isFavorite ? 'false' : 'true' }
        aria-label={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
      >
        { isFavorite ? '★' : '☆' }
      </button>
    </fetcher.Form>
  </>
}
