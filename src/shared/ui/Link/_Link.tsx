import { Link as RouterLink } from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_Link.types.ts'

import styles from './_Link.module.css'


export const Link = ({
  className,
  isExternal,
  to,
  children
}: ComponentProps) => {
  return isExternal ? <>
    <a
      className={ classNames(className, styles.root) }
      href={ to }
      target={ '_blank' }
      rel={ 'noopener noreferrer' }
    >
      { children }
    </a>
  </> : <>
    <RouterLink
      className={ classNames(className, styles.root) }
      to={ to }
    >
      { children }
    </RouterLink>
  </>
}
