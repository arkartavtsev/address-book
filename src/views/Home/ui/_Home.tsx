import { Link } from 'react-router'

import styles from './_Home.module.css'


export const Home = () => {
  return <>
    <div className={ styles.root }>
      <img
        className={ styles.logo }
        width={ 540 }
        src={ 'home/logo.svg' }
        alt={ 'React Router' }
      />

      <p className={ styles.text }>
        This is&nbsp;a&nbsp;demo for React Router
      </p>

      <Link
        className={ styles.link }
        to={ 'about' }
      >
        About this demo
      </Link>
    </div>
  </>
}
