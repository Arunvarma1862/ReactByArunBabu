import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function Root({ children }) {
  const navigation= useNavigation()
  return (
    <>
      <nav>
        <Link to="/">Movie Search</Link>
        {navigation.state==="loading"?<h1>Loading...</h1>:<Outlet />}
        {/* <Outlet /> */}
      </nav>
    </>
  );
}

export default Root;
