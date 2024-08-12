import { useParams } from 'react-router-dom';

const HelloWorld = () => {

    let { message } = useParams();

    return(
        <div>
            {message}
        </div>
    )

};

export default HelloWorld;