import React from 'react'
import styles2 from "./Container.module.css"

function Conatiner({children}) {
  return (
    <div className={styles2.conatiner}>{children}</div>
  )
}

export default Conatiner