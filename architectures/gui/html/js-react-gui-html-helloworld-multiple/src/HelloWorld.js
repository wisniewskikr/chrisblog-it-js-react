import { Routes, Route, Link } from "react-router-dom";
import { Init } from "./Init";

export function HelloWorld() {

  return (
    <>
      <div>Hello World!</div>
      <Link to="/">Back</Link>
      <Routes>
        <Route path="/" element={ <Init /> }/>
      </Routes>
    </>
  )
  
}
