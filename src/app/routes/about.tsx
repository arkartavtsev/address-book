import { getMetaTitle } from '@/shared/helpers'

import { AboutView } from '@/views'


export function meta() {
  return [ getMetaTitle('About') ]
}


export default function () {
  return <>
    <AboutView />
  </>
}
