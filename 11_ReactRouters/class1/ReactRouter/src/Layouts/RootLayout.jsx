import React from 'react'
import { Outlet ,Link,NavLink} from 'react-router-dom'
import styles from "./RootLayout.module.css"


// Nested Routes- Route Parent and Route childs
// Outlet -child component will render
// link-not refresh the whole content when compare to anchor  tag <a>

function RootLayout() {
  return (
    <div>
        <h1>Nav</h1>
        <ul>
            <li><NavLink to="/" className={(obj)=>{
                return obj.isActive ? styles.activeNav:null
            }}>Home</NavLink></li>
            <li><NavLink to="about" className={(obj)=>{
                return obj.isActive ? styles.activeNav:null
            }}>About</NavLink></li>
            <li><NavLink to="contact" className={({isActive})=>{
                return isActive ? styles.activeNav:null
            }}>Contact</NavLink></li>
            <li><NavLink to="post" className={(obj)=>{
                return obj.isActive ? styles.activeNav:null
            }}>Post</NavLink></li>
            
        </ul>
        <hr />
        <main>
            {/* <h1>Main Content</h1> */}
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout