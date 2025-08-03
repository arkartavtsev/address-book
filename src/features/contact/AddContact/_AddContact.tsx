import { useNavigate } from 'react-router'

import type { ComponentProps } from './_AddContact.types.ts'

import { Button } from '@/shared/ui'


export const AddContact = ({
  className
}: ComponentProps) => {
  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/add-contact')
  }


  return <>
    <Button
      className={ className }
      onClick={ handleClick }
    >
      New
    </Button>
  </>
}
