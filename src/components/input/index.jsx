import React, { useRef } from "react";
const InputComp = () => {
  const input = useRef();

  const inputFocus = () => {
    input.current.focus()
    input.current.value = "salam"
  }
  return (
    <div>
      <input ref={input} type="text" placeholder="type here ..." />
      <button onClick={() => inputFocus()}>Click</button>
    </div>
  );
};

export default InputComp;
