import { Link, Route, Switch } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import HelloWorldParam from "./HelloWorldParam";


const AppRoute = () => (

    <div>
        
        <nav>
            <ul>
                <li> <Link to="/">Hello World</Link> </li>
                <li> <Link to="/stranger">Hello World with Parameter</Link> </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/" element={<HelloWorld/>} />
            <Route path="/:name" element={<HelloWorldParam/>} />
        </Switch>

    </div>    

);

export default AppRoute;