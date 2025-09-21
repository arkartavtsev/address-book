import {
  isRouteErrorResponse,
  Meta,
  Links,
  Scripts,
  ScrollRestoration,
  Outlet,
} from 'react-router'

import type { Route } from './+types/root'

import { getMetaTitle } from '@/shared/helpers'

import { ErrorBoundaryView } from '@/views'

import './app.css'


export function meta() {
  return [ getMetaTitle() ]
}


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
  let status: string | number | undefined
  let statusText: string | undefined
  let stack: string | undefined


  if (isRouteErrorResponse(error)) {
    status = error.status
    statusText = error.status === 404
      ? 'The requested page could not be found.'
      : error.statusText
  } else if (error instanceof Error) {
    stack = error.stack
  }


  return <>
    <ErrorBoundaryView
      status={ status }
      statusText={ statusText }
      stack={ stack }
    />
  </>
}


export function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='A demo application showing off some of the powerful features of React Router' />

        <Meta />
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
