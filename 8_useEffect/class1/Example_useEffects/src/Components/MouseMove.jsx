import React, { useEffect, useState } from "react";

function MouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMousemove = (e) => {
    console.log({ x: e.clientX, y: e.clientY });
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMousemove);
    return () => {
      console.log("cleanUp function!!!");
      document.removeEventListener("mousemove", handleMousemove);
    };
  }, []);
  return (
    <div>
      x:{mousePosition.x}
      y:{mousePosition.y}
    </div>
  );
}

export default MouseMove;
