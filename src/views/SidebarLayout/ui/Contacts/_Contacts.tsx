import { NavLink } from 'react-router'
import classNames from 'classnames'

import type { ComponentProps } from './_Contacts.types.ts'

import styles from './_Contacts.module.scss'


export const Contacts = ({
  className,
  data
}: ComponentProps) => {
  return <>
    <div className={ classNames(className, styles.root) }>
      {
        data.length ? <>
          <nav>
            <ul className={ styles.list }>
              {
                data
                  .sort(
                    (a, b) => `${ a.first } ${ a.last }`.localeCompare(`${ b.first } ${ b.last }`)
                  ).map(({ id, first, last, favorite }) => (
                    <li key={ id }>
                      <NavLink
                        className={ styles.link }
                        to={ `contacts/${ id }` }
                      >
                        {
                          first || last ? <>
                            { `${ first } ${ last }`.trim() }
                          </> : <>
                            No Name
                          </>
                        }

                        {
                          favorite && <>
                            <span className={ styles.favoriteMark }>
                              ★
                            </span>
                          </>
                        }
                      </NavLink>
                    </li>
                  ))
              }
            </ul>
          </nav>
        </> : <>
          <p className={ styles.emptyMessage }>
            No contacts
          </p>
        </>
      }
    </div>
  </>
}
