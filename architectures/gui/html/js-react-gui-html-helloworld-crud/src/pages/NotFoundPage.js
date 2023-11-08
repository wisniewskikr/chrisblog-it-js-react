import { BackLink } from "../components/BackLink";

export function NotFoundPage({ setSelectedMessage }) {

  return (
    <>
      <div>Page Not Found!</div>
      <BackLink setSelectedMessage={ setSelectedMessage } />     
    </>
  )
  
}
