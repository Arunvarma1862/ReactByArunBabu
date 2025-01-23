import React from "react";

function User({ id, name, username, phone, email, website, address }) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "1px solid blue", 
        backgroundColor: "green",
        color: "white", 
        textAlign: "center",
      }}
    >
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{address.street}</p>
      <p>{address.geo.lat}</p>
    </div>
  );
}

export default User;
