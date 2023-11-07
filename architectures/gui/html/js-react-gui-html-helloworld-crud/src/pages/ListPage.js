import { NavigationComponent } from "../components/NavigationComponent";
import { useEffect, useState } from "react"

export function ListPage() {

  const [messages, setMessages] = useState(() => {
    const localValue = localStorage.getItem("MESSAGES")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("MESSAGES", JSON.stringify(messages))
  }, [messages])

  return (
    <>
      <h4>List Messages</h4>
      <NavigationComponent />
    </>    
  )

}
