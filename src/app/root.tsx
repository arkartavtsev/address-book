import {
  isRouteErrorResponse,
  Links,
  Scripts,
  ScrollRestoration,
  Outlet,
} from 'react-router'

import type { Route } from './+types/root'

import './app.css'


export function HydrateFallback() {
  return <>
    <div id='loading-splash'>
      <div id='loading-splash-spinner' />

      <p>
        Loading, please wait...
      </p>
    </div>
  </>
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return <>
    <main id='error-page'>
      <h1>{ message }</h1>
      <p>{ details }</p>

      {
        stack && <>
          <pre>
            <code>{ stack }</code>
          </pre>
        </>
      }
    </main>
  </>
}


export function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>React Router Contacts</title>
        <meta name='description' content='A demo application showing off some of the powerful features of React Router' />

        <Links /> 
      </head>

      <body>
        { children }

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  </>
}


export default function App() {
  return <>
    <Outlet />
  </>
}
