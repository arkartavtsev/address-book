import {
  Form,
  useNavigate
} from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_ContactForm.types.ts'

import styles from './_ContactForm.module.css'

import { Button } from '@/shared/ui'


export const ContactForm = ({
  className,
  initialData
}: ComponentProps) => {
  const {
    id,
    first,
    last,
    avatar,
    twitter,
    notes
  } = initialData || {}

  const navigate = useNavigate()


  const handleCancelButtonClick = () => {
    navigate(-1)
  }


  return <>
    <Form
      key={ id }
      className={ classNames(className, styles.root) }
      id={ 'contact-form' }
      method={ 'post' }
    >
      <div className={ styles.field }>
        <label
          className={ styles.fieldLabel }
          htmlFor={ 'first' }
        >
          Name
        </label>

        <input
          className={ styles.fieldInput }
          id={ 'first' }
          name={ 'first' }
          type={ 'text' }
          defaultValue={ first }
          placeholder={ 'First' }
          aria-label={ 'First name' }
        />

        <input
          className={ styles.fieldInput }
          id={ 'last' }
          name={ 'last' }
          type={ 'text' }
          defaultValue={ last }
          placeholder={ 'Last' }
          aria-label={ 'Last name' }
        />
      </div>

      <div className={ styles.field }>
        <label
          className={ styles.fieldLabel }
          htmlFor={ 'twitter' }
        >
          Twitter
        </label>

        <input
          className={ styles.fieldInput }
          id={ 'twitter' }
          name={ 'twitter' }
          type={ 'text' }
          defaultValue={ twitter }
          placeholder={ '@twitter-name' }
        />
      </div>

      <div className={ styles.field }>
        <label
          className={ styles.fieldLabel }
          htmlFor={ 'avatar' }
        >
          Avatar URL
        </label>

        <input
          className={ styles.fieldInput }
          id={ 'avatar' }
          name={ 'avatar' }
          type={ 'text' }
          defaultValue={ avatar }
          placeholder={ 'https://example.com/avatar.jpg' }
        />
      </div>

      <div className={ styles.field }>
        <label
          className={ styles.fieldLabel }
          htmlFor={ 'notes' }
        >
          Notes
        </label>

        <textarea
          className={ styles.fieldInput }
          id={ 'notes' }
          name={ 'notes' }
          defaultValue={ notes }
          rows={ 6 }
        />
      </div>

      <div className={ styles.buttonsWrapper }>
        <Button type={ 'submit' }>
          Save
        </Button>

        <Button
          modifiers={[ 'danger' ]}
          type={ 'reset' }
          onClick={ handleCancelButtonClick }
        >
          Cancel
        </Button>
      </div>
    </Form>
  </>
}
