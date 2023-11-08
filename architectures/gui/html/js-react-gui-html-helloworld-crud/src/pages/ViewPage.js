import { BackLink } from "../components/BackLink";

export function ViewPage({ selectedMessage }) {

  return (
    <>
      <h4>View Message</h4>
      <BackLink />
      { selectedMessage.id }
    </>    
  )

}
