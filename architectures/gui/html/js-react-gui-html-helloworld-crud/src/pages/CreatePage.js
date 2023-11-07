import { TextComponent } from "../components/TextComponent";
import { BackLink } from "../components/BackLink";
import { CreateLink } from "../components/CreateLink";

export function CreatePage() {

  return (
    <>
      <h4>Create Message</h4>
      <TextComponent />
      <CreateLink />
      &nbsp;
      <BackLink />
    </>    
  )

}
