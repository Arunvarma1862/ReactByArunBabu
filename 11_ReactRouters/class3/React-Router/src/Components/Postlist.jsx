import React from "react";
import styles from "./Postlist.module.css";
import { Link } from "react-router-dom";

function Postlist({ userId, body, title, id }) {
  return (
    <>
      <div className={styles.postlist}>
        <Link to={id.toString()}>
          <p>{title} </p>
        </Link>
        <p>id:{id}</p>
        {/* <p>userId:{userId}</p> */}
        {/* <p>body:{body}</p> */}
      </div>
    </>
  );
}

export default Postlist;
