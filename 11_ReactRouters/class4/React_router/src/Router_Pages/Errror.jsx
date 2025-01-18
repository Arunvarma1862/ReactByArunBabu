import React from 'react'
import { useRouteError } from 'react-router-dom'

function Errror() {
  const error= useRouteError()
  return (
    <div>{error.message}</div>
  )
}

export default Errror