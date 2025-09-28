import {
  Form,
  useNavigate
} from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_ContactForm.types.ts'

import {
  FormField,
  Button
} from '@/shared/ui'

import styles from './_ContactForm.module.scss'


export const ContactForm = ({
  className,
  initialData,
  title
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
    <h1 className={ 'sr-only' }>
      { title }
    </h1>

    <Form
      key={ id }
      className={ classNames(className, styles.root) }
      id={ 'contact-form' }
      method={ 'post' }
    >
      <FormField
        label={{
          text: 'Name',
          className: styles.fieldLabel
        }}
        fields={[
          {
            name: 'first',
            placeholder: 'First',
            defaultValue: first,
            'aria-label': 'First name'
          }, {
            name: 'last',
            placeholder: 'Last',
            defaultValue: last,
            'aria-label': 'Last name'
          }
        ]}
      />

      <FormField
        label={{
          text: 'Twitter',
          className: styles.fieldLabel
        }}
        fields={[
          {
            name: 'twitter',
            placeholder: '@twitter-name',
            defaultValue: twitter
          }
        ]}
      />

      <FormField
        label={{
          text: 'Avatar URL',
          className: styles.fieldLabel
        }}
        fields={[
          {
            name: 'avatar',
            placeholder: 'https://example.com/avatar.jpg',
            defaultValue: avatar
          }
        ]}
      />

      <FormField
        label={{
          text: 'Notes',
          className: styles.fieldLabel
        }}
        fields={[
          {
            name: 'notes',
            defaultValue: notes
          }
        ]}
        as={ 'textarea' }
      />

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
