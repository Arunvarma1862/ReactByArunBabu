import React from 'react'
import { Link, Outlet,NavLink } from 'react-router-dom'
import styles from "./RootLayout.module.css"
import { useAuth } from '../Context/AuthProvider';

// RootLayout- we can show nav in all pages
function RootLayout() {
    const {isLogged,setLogged}=useAuth()
  return (
    <div>
        <h1>Nav</h1>
        <ul>
            <li><NavLink to="/" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Home</NavLink></li>
            <li><NavLink to="about"className={({isActive})=>{
                return isActive?styles.activeNav:null
            }} >About</NavLink></li>
            <li><NavLink to="contact" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Conatct</NavLink></li>
            <li><NavLink to="posts" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Posts</NavLink></li>
            {!isLogged &&  <li><NavLink to="login" className={(obj)=>{
                return obj.isActive?styles.activeNav:null
            }}>Login</NavLink></li>}
            <br />
             {isLogged &&  <button onClick={()=>{setLogged(false)}}>Logout</button>}
        </ul>
        <hr />
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout