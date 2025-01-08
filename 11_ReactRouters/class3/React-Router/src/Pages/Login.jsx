import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

function Login() {
  const { isLoggedIn, setLoggedIn } = useAuth();
  // const location =useLocation()
  // console.log(loacation)
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("redirectTo"));
  const previouspath = searchParams.get("redirectTo") || "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate(previouspath, { replace: true });
    }
  }, [isLoggedIn]); // 2uses are posts component render at one time and login componet is available render to home page
  function login() {
    setLoggedIn(true);
  }
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;
