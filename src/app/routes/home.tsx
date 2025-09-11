import { HomeView } from '@/views'


export function meta() {
  return [
    { title: 'React Router Contacts' }
  ]
}


export default function () {
  return <>
    <HomeView />
  </>
}
