import {
  Form,
  redirect,
  useNavigate
} from 'react-router'

import type { Route } from '../contacts/+types/edit'

import {
  getContact,
  updateContact
} from '../../data'


export async function loader({
  params
}: Route.LoaderArgs) {
  const contact = await getContact(params.contactId)

  if (!contact) {
    throw new Response('Not Found', { status: 404 })
  }

  return { contact }
}

export async function action({
  params,
  request,
}: Route.ActionArgs) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  await updateContact(params.contactId, updates)

  return redirect(`/contacts/${ params.contactId }`)
}


export default function EditContact({
  loaderData
}: Route.ComponentProps) {
  const { contact } = loaderData

  const navigate = useNavigate()


  const handleCancelButtonClick = () => {
    navigate(-1)
  }


  return <>
    <Form
      key={ contact.id }
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
          defaultValue={ contact.first }
          placeholder={ 'First' }
          aria-label={ 'First name' }
        />

        <input
          name={ 'last' }
          type={ 'text' }
          defaultValue={ contact.last }
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
          defaultValue={ contact.twitter }
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
          defaultValue={ contact.avatar }
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
          defaultValue={ contact.notes }
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
