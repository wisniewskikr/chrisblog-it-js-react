import { useEffect } from "react";

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './../assets/js/custom.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      Hello World!
    </div>
  );

}

export default App;
