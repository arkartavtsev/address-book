import {
  Form,
  useNavigate
} from 'react-router'

import { Button } from '@/shared/ui'


export const AddContact = () => {
  const navigate = useNavigate()


  const handleCancelButtonClick = () => {
    navigate(-1)
  }


  return <>
    <Form
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
          defaultValue={ '' }
          placeholder={ 'First' }
          aria-label={ 'First name' }
          required
        />

        <input
          name={ 'last' }
          type={ 'text' }
          defaultValue={ '' }
          placeholder={ 'Last' }
          aria-label={ 'Last name' }
          required
        />
      </p>

      <label>
        <span>
          Twitter
        </span>

        <input
          name={ 'twitter' }
          type={ 'text' }
          defaultValue={ '' }
          placeholder={ '@twitter-name' }
          required
        />
      </label>

      <label>
        <span>
          Avatar URL
        </span>

        <input
          name={ 'avatar' }
          type={ 'text' }
          defaultValue={ '' }
          placeholder={ 'https://example.com/avatar.jpg' }
          aria-label={ 'Avatar URL' }
          required
        />
      </label>

      <label>
        <span>
          Notes
        </span>

        <textarea
          name={ 'notes' }
          defaultValue={ '' }
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
