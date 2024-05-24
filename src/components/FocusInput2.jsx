// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  const handleFocus = () =>{
    inputRef.current.focus()
  }

  useEffect(() => {
    // complete the missing code
    handleFocus()
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on component mount"
        onClick={handleFocus}
      />
    </div>
  );
}

export default FocusInput2;
