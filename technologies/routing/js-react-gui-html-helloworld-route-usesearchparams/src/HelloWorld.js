import { useSearchParams } from "react-router-dom";

const HelloWorld = () => {

    const [searchParams] = useSearchParams();
    const message = searchParams.get("message");

    return(
        <div>
            {message}
        </div>
    )

};

export default HelloWorld;