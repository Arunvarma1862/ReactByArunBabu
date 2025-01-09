import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'
import styles from "./Root.module.css"
import LoadingSpinner from "../assets/LoadingSpinner.svg";


function Root() {
  const navigation=useNavigation()
  return (
    <div>
      <nav className={`container ${styles.nav}`}>
         <Link to="/">Movie Search</Link>
      </nav>
          
        <main>
          {navigation.state==="loading"?<img src={LoadingSpinner} alt="Loading..." className='loadingspinner' />:<Outlet/>}
           {/* <Outlet/> */}
        </main>
    </div>
  )
}

export default Root