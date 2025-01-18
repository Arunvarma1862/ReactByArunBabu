import React from "react";
import { Outlet,Link, NavLink } from "react-router-dom";
import styles from "./Rootlayout.module.css"
import { useAuth } from '../Context/AuthProvider'
import { useNavigation } from "react-router-dom";

function RootLayout() {
    const {isLoggedIn,setLoggedIn}=useAuth()
    const navigation =useNavigation()
  return ( 
    <> 
      <h1>Nav</h1>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Home</NavLink></li>
            <li><NavLink to="about" className={({isActive})=>{
                return isActive?styles.activeNav:null
            }}>About</NavLink></li>
            <li><NavLink to="contact" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Contact</NavLink></li>
            <li><NavLink to="posts" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Posts</NavLink></li>
           {!isLoggedIn &&  <li><NavLink to="login" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Login</NavLink></li>}
            <br />
            {isLoggedIn && <button onClick={()=>{setLoggedIn(false)}}>Logout</button>}
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        {navigation.state==="loading"? <h1>Loading..</h1>:<Outlet/>}
        
      </main>
    </>
  );
}

export default RootLayout;
