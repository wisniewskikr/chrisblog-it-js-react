import { useParams } from "react-router-dom";

const HelloWorldParam = () => {

    let { name } = useParams(); 
    return (<h2>HelloWorld {name}!</h2>);
    
};

export default HelloWorldParam;