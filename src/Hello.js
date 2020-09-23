import React from "react";

function Hello(props) {
  const { name, color } = props;
  return <div style={{ color: color }}>안녕하세요 {name}</div>;
}

export default Hello;
