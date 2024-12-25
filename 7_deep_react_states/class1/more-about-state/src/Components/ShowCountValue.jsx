import React from 'react'

function ShowCountValue(props) {
    console.log(props);
    // const {counter} = props;
    const counts= props.counter
    
  return (
    <h1>Count :{counts}</h1> 
  )
}

export default ShowCountValue