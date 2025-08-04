import { Link } from 'react-router'

import styles from './_About.module.css'


export const About = () => {
  return <>
    <div className={ styles.root }>
      <Link to='/'>
        ← Back to&nbsp;the demo
      </Link>

      <h1>
        About React Router Contacts
      </h1>

      <div>
        <p>
          This is&nbsp;a&nbsp;demo application showing off some of&nbsp;the powerful features of&nbsp;React Router, including dynamic routing, nested routes, loaders, actions, and more.
        </p>

        <h2>
          Features
        </h2>

        <p>
          Explore the demo to&nbsp;see how React Router handles:
        </p>

        <ul>
          <li>
            Data loading and mutations with loaders and actions
          </li>

          <li>
            Nested routing with parent/child relationships
          </li>

          <li>
            URL-based routing with dynamic segments
          </li>

          <li>
            Pending and optimistic&nbsp;UI
          </li>
        </ul>

        <h2>
          Learn More
        </h2>

        <p>
          Check out the official documentation&nbsp;at <a href='https://reactrouter.com' target='_blank'>reactrouter.com</a> to&nbsp;learn more about building great web applications with React Router.
        </p>
      </div>
    </div>
  </>
}
