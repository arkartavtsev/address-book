import {
  Form,
  useNavigate
} from 'react-router'

import type { ComponentProps } from './_EditContact.types'

import { Button } from '@/shared/ui'


export const EditContact = ({
  data
}: ComponentProps) => {
  const {
    id,
    first,
    last,
    avatar,
    twitter,
    notes
  } = data

  const navigate = useNavigate()


  const handleCancelButtonClick = () => {
    navigate(-1)
  }


  return <>
    <Form
      key={ id }
      id={ 'contact-form' }
      method={ 'post' }
    >
      <p>
        <span>
          Name
        </span>

        <input
          name={ 'first' }
          type={ 'text' }
          defaultValue={ first }
          placeholder={ 'First' }
          aria-label={ 'First name' }
        />

        <input
          name={ 'last' }
          type={ 'text' }
          defaultValue={ last }
          placeholder={ 'Last' }
          aria-label={ 'Last name' }
        />
      </p>

      <label>
        <span>
          Twitter
        </span>

        <input
          name={ 'twitter' }
          type={ 'text' }
          defaultValue={ twitter }
          placeholder={ '@twitter-name' }
        />
      </label>

      <label>
        <span>
          Avatar URL
        </span>

        <input
          name={ 'avatar' }
          type={ 'text' }
          defaultValue={ avatar }
          placeholder={ 'https://example.com/avatar.jpg' }
          aria-label={ 'Avatar URL' }
        />
      </label>

      <label>
        <span>
          Notes
        </span>

        <textarea
          name={ 'notes' }
          defaultValue={ notes }
          rows={ 6 }
        />
      </label>

      <p>
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
      </p>
    </Form>
  </>
}
