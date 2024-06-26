import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import HelloWorld from "./HelloWorld";


const AppRoute = () => (

    <div>
        
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/helloworld">Hello World</Link> </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/helloworld" element={<HelloWorld/>} />
        </Routes>

    </div>    

);

export default AppRoute;