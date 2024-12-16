import { useState } from "react";
import {v4 as uuid} from "uuid"

function StateExampleArray() {
  const [fruits, setFruits] = useState(["mango", "orange", "Banana"]);

  function AddFruit(){
    let fruit=document.querySelector(".inputFruit");
    let values= fruit.value
    // setFruits([...fruits,values]);

    // setFruits((currentState)=>{
    //     return  [...currentState,values]
    // })

    setFruits((currentState)=>[...currentState,values])

    fruit.value=" ";
  }
  return (
    <>
    <ul>
      {fruits.map((value, index, array) => {
        return <li key={uuid()}>{value}</li>;
      })}
    </ul>
    <input type="text" className="inputFruit" />
    <button onClick={AddFruit}>Add Fruit</button>
    </>
  );
}

export default StateExampleArray;
