import React from "react";
import { Link } from "react-router-dom";

function Postlist({ id, title, userId, body }) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "1p solid blue",
        backgroundColor: "lightblue",
      }}
    >
      <Link to={id.toString()}>
        <h2>title:{title}</h2>
      </Link>
      <h2>id:{id}</h2>

      {/* <h2>userId:{userId}</h2>
        <h2>body:{body}</h2> */}
    </div>
  );
}

export default Postlist;
