import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelloWorld } from "./HelloWorld";
import { Init } from "./Init"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Init /> } />
            <Route path="/helloworld" element={ <HelloWorld /> } />           
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
