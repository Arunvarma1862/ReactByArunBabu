import React from "react";
import { Form } from "react-router-dom";
import styles from "./Search.module.css"

function Search({ searchTerms }) {
  return (
    <Form method="GET" className={`container ${styles.form}`}>
      <input
        type="text"
        name="search"
        id="search"
        required
        defaultValue={searchTerms}
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default Search;
