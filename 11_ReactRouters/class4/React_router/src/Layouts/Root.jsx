import React from 'react'
import { Outlet ,Link, NavLink} from 'react-router-dom'
import styles from "./Root.module.css"
import { useAuth } from '../Context/AuthProvider'

function Root() {
    const {isLogged,setLoggedIn}=useAuth()
  return (
    <>
    <div>
        <h1>Nav</h1>
        <header>
            <nav>
                <ul>
                <li> <NavLink to="/" className={(obj)=>{
                    return obj.isActive?styles.activeNav:null
                }}>Home</NavLink>   </li>
                <li>  <NavLink to="/about" className={(obj)=>{
                    return obj.isActive?styles.activeNav:null
                }}>About</NavLink> </li>
                <li>  <NavLink to="/contact" className={(obj)=>{
                    return obj.isActive?styles.activeNav:null
                }}>Contact</NavLink> </li>
                 <li>  <NavLink to="/posts" className={(obj)=>{
                    return obj.isActive?styles.activeNav:null
                }}>Posts</NavLink> </li>
               {!isLogged &&  <li> <NavLink to="/login" className={(obj)=>{
                    return obj.isActive?styles.activeNav:null
                }}>Login</NavLink> </li>}
                <br></br>
                {isLogged && <button onClick={()=>setLoggedIn(false)}>Logout</button>}
                </ul>
            </nav>
        </header>
        <hr />
    </div>
    <main>
        <Outlet/>
    </main>
    </>
    
    
  )
}

export default Root