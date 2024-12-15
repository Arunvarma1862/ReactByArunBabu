import React from "react";

export default function Greetings({handleClick}) {
  return (
    <h1 className="greet" onClick={handleClick}>
      Greetings
    </h1>
  );
}
