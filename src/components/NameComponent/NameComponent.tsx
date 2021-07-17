import React, {useEffect}from 'react'
import {userStore} from "../../stores/userStore";

function NameComponent(props) {

  const { name, setName } = userStore()

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  };

  useEffect(() => {    
    document.title = name.length == 0 ? "Zustand-react" : `Zustand: ${name}`;
  }, [name]); //With an array, effect only runs when the referenced value(s) changes

  return (
    <div>
        <p>
          Enter your name below:
        </p>
        <div>
        {name.length > 0 ? `Hello, ${name}!` : ""
        }</div>

      <input type="text" value={name} onChange={(e) => nameChangeHandler(e)} />
    </div>
  )
  
}

export default NameComponent;