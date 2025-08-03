import {
  Form,
  redirect,
  useNavigate
} from 'react-router'

import type { Route } from '../contacts/+types/add'

import { createContact } from '../../data'


export async function action({
  request
}: Route.ActionArgs) {
  const formData = await request.formData()
  const newContactData = Object.fromEntries(formData)

  const newContact = await createContact(newContactData)

  return redirect(`/contacts/${ newContact.id }`)
}


export default function AddContact() {
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
        <button type={ 'submit' }>
          Save
        </button>

        <button
          type={ 'reset' }
          onClick={ handleCancelButtonClick }
        >
          Cancel
        </button>
      </p>
    </Form>
  </>
}
