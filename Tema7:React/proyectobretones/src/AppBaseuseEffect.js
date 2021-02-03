import { useState, useEffect } from "react";

  function App() {

    const [show, setShow] = useState(true);
    return (
      
        <div className="container">
          <button onClick={() => setShow(!show)}>Toggle</button>
          {show && <Example />}
        </div>
      
    );
  }

export default App;


function Example() {

  
  const handleMount = () => {
    console.log("Me renderizo");
  }
  useEffect(handleMount);
  return (
    <div>
      soy un componente que fiuuu se va
    </div>
  )
  }
 