import {
  useNavigate,
  useSubmit
} from 'react-router'

import styles from './_Contact.module.css'

import type { ComponentProps } from './_Contact.types.ts'

import { Button } from '@/shared/ui'
import { ToggleFavoriteStatus } from './ToggleFavoriteStatus'


export const Contact = ({
  data
}: ComponentProps) => {
  const {
    id,
    first,
    last,
    avatar,
    twitter,
    notes,
    favorite
  } = data

  const navigate = useNavigate()
  const submit = useSubmit()


  const handleEditButtonClick = () => {
    navigate(`/contacts/${ id }/edit`)
  }

  const handleDeleteButtonClick = () => {
    const response = confirm('Please confirm you want to delete this record.')

    if (response) {
      submit(null, {
        action: `/contacts/${ id }/destroy`,
        method: 'post'
      })
    }
  }


  return <>
    <div className={ styles.root }>
      <img
        className={ styles.image }
        key={ avatar }
        src={ avatar }
        alt={ `${ first } ${ last } avatar` }
      />

      <div className={ styles.info }>
        <h1 className={ styles.title }>
          {
            first || last ? <>
              { first } { last }
            </> : <>
              <i>No Name</i>
            </>
          }

          <ToggleFavoriteStatus initialState={ favorite } />
        </h1>

        {
          twitter ? <>
            <p className={ styles.username }>
              { twitter }
            </p>
          </> : null
        }

        {
          notes ? <>
            <p className={ styles.notes }>
              { notes }
            </p>
          </> : null
        }

        <div className={ styles.buttonsWrapper }>
          <Button onClick={ handleEditButtonClick }>
            Edit
          </Button>

          <Button
            modifiers={[ 'danger' ]}
            onClick={ handleDeleteButtonClick }
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  </>
}
