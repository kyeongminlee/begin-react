import React, { useState } from "react";

function InputSamle() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText((prevText) => "");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {text}
      </div>
    </div>
  );
}

export default InputSamle;
