import { NavigationComponent } from "../components/NavigationComponent";
import { TextComponent } from "../components/TextComponent";
import { BackLink } from "../components/BackLink";

export function CreatePage() {

  return (
    <>
      <h4>Create Message</h4>
      <NavigationComponent />
      <TextComponent />
      <BackLink />
    </>    
  )

}
