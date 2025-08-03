import { Link } from 'react-router'


export default function Home() {
  return <>
    <p id='index-page'>
      This is a demo for React Router

      <br />

      <Link to='about'>
        About this demo
      </Link>
    </p>
  </>
}
