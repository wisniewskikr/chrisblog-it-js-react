import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ListPage } from "./pages/ListPage"
import { CreatePage } from "./pages/CreatePage"
import { ViewPage } from "./pages/ViewPage"
import { UpdatePage } from "./pages/UpdatePage"
import { DeletePage } from "./pages/DeletePage"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ListPage /> } />
            <Route path="/create" element={ <CreatePage /> } />
            <Route path="/view" element={ <ViewPage /> } />
            <Route path="/update" element={ <UpdatePage /> } />
            <Route path="/delete" element={ <DeletePage /> } />
            <Route path="/*" element={ <NotFoundPage /> } />            
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
