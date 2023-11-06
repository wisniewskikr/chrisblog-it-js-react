import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelloWorld } from "./HelloWorld";
import { NotFound } from "./NotFound";
import { Init } from "./Init"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Init /> } />
            <Route path="/helloworld" element={ <HelloWorld /> } />
            <Route path="/*" element={ <NotFound /> } />            
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
