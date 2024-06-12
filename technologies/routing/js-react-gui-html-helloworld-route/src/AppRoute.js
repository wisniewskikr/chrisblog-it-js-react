import { Link, Route, Routes } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const HelloWorld = () => <h2>HelloWorld</h2>;

const AppRoute = () => (

    <div>
        
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/helloworld">Hello World</Link> </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helloworld" element={<HelloWorld />} />
        </Routes>

    </div>    

);

export default AppRoute;