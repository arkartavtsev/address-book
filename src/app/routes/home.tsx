import { getMetaTitle } from '@/shared/helpers'

import { HomeView } from '@/views'


export function meta() {
  return [ getMetaTitle() ]
}


export default function () {
  return <>
    <HomeView />
  </>
}
