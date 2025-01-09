import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error= useRouteError()
    console.log(error)
  return (
    <div style={{margin:"1rem"}}>Page {error.status} {error.statusText}</div>
  )
}

export default Error