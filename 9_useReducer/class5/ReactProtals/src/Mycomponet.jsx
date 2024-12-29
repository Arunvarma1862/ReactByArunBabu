import React from "react";
import { createPortal } from "react-dom";

function Mycomponet() {
  return createPortal(<div>Mycomponet</div>,document.getElementById("newRoot")
  );
}

export default Mycomponet;
