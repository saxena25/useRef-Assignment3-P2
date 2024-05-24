// src/components/ChangeColor2.jsx

import { useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);

  const handleChangeColor = () => {
    // complete the missing code
    //when the component mount on UI the divRef is not null so, iam checking if divRef is not null the below if statement will run..
    if(divRef.current !== null){
      //below if divRef color is red then it will change to blue
      if(divRef.current.style.backgroundColor === 'red'){
      divRef.current.style.backgroundColor = 'blue'
      //below if the color is blue then it will change to red.
      }else{
      divRef.current.style.backgroundColor = 'red'
      }
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
