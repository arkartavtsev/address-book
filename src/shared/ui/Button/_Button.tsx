import classNames from 'classnames'

import type { ComponentProps } from './_Button.types.ts'

import styles from './_Button.module.css'


export const Button = ({
  className,
  modifiers,
  children,
  ...props
}: ComponentProps) => {
  return <>
    <button
      className={classNames(
        className,
        styles.root,
        modifiers?.map(modifier => styles[`root_${ modifier }`])
      )}
      type={ props.type || 'button' }
      { ...props }
    >
      { children }
    </button>
  </>
}
