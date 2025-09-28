import { useId } from 'react'
import classNames from 'classnames'

import type { ComponentProps } from './_FormField.types.ts'

import styles from './_FormField.module.scss'


const MAX_TEXTAREA_ROWS = 6


export const FormField = ({
  className,
  label,
  fields,
  as = 'input'
}: ComponentProps) => {
  const Tag = as

  const id = useId()


  return <>
    <div className={ classNames(className, styles.root) }>
      <label
        className={ label.isHidden ? 'sr-only' : classNames(styles.label, label.className) }
        htmlFor={ id }
      >
        { label.text }
      </label>

      {
        fields.map(({ name, type, icon, ...rest }, index) => {
          const Icon = icon

          return (
            <div
              key={ name }
              className={ styles.inputWrapper }
            >
              {
                Icon && <>
                  <span className={ styles.icon }>
                    <Icon />
                  </span>
                </>
              }

              <Tag
                className={ classNames(styles.input, Icon && styles.input_withIcon) }
                id={ index === 0 ? id : undefined }
                name={ name }
                type={ type || 'text' }
                rows={ as === 'textarea' ? MAX_TEXTAREA_ROWS : undefined }
                { ...rest }
              />
            </div>
          )
        })
      }
    </div>
  </>
}
