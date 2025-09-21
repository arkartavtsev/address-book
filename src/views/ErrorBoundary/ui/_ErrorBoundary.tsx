import type { ComponentProps } from './_ErrorBoundary.types.ts'

import styles from './_ErrorBoundary.module.css'


export const ErrorBoundary = ({
  status,
  statusText,
  stack
}: ComponentProps) => {
  const defaultStatus = 'Oops!'
  const defaultStatusText = 'An unexpected error occurred'


  return <>
    <main className={ styles.root }>
      <h1 className={ styles.status }>
        { status || defaultStatus }
      </h1>

      <p className={ styles.statusText }>
        { statusText || defaultStatusText }
      </p>

      {
        stack && <>
          <code className={ styles.stack }>
            { stack }
          </code>
        </>
      }
    </main>
  </>
}
