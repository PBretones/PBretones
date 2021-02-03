import { useState, useEffect } from "react";

  function App() {

    const [show, setShow] = useState(true);
    const [count, setCount] = useState (0);
    
    useEffect(()=> {
        document.title=`Has hecho click ${count} veces`;
        
    })
    return (
      
        <div className="container">
          <button onClick={() => setShow(!show)}>Toggle</button>
          {show && <Example />}
        

        <p>Click ${count} veces</p>
        <button onClick={() => setCount(count => count + 1)}>Click</button>
        </div>
    );

    
  }

export default App;


function Example() {
  
  }
 