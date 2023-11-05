import { Routes, Route, Link } from "react-router-dom";
import { HelloWorld } from "./HelloWorld";

export function Init() {

  return (
    <>
      <div>To display Hello World message click <Link to="/helloworld">here</Link>.</div>
      <Routes>
        <Route path="/helloworld" element={ <HelloWorld /> }/>
      </Routes>
    </>
  )

}
