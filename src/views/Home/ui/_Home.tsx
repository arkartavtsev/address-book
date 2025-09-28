import { Link } from '@/shared/ui'

import styles from './_Home.module.scss'


export const Home = () => {
  return <>
    <div className={ styles.root }>
      <h1 className={ 'sr-only' }>
        React Router Contacts
      </h1>

      <img
        className={ styles.logo }
        width={ 540 }
        src={ 'logo.svg' }
        alt={ 'React Router' }
      />

      <p className={ styles.text }>
        This is&nbsp;a&nbsp;demo for React Router
      </p>

      <Link to={ 'about' }>
        About this demo
      </Link>
    </div>
  </>
}
