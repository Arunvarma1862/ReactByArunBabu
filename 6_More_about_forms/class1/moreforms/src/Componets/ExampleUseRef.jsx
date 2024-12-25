import React, { useRef, useState } from 'react'

// useRef- component will not rendered-change of ref does not trigger
// example of useRef
// differnece between useRef and useState
// handle form using useRef

//string
//number
// []
// {}
//html elements


// controlled components-useState
// uncontrolled components -useRef
function ExampleUseRef() {
   
  const usernameRef= useRef();
  const passwordRef=useRef();
 
    function handleSubmit(e){
        e.preventDefault();
        console.log(usernameRef)
        console.log(usernameRef.current);
        console.log("username",usernameRef.current.value)
        console.log("password",passwordRef.current.value)
        console.log("Form submit")
    }
     
   return (
      <form action="" onSubmit={handleSubmit}>
        <div className="formGroup">
            <label htmlFor="userName">Username</label>
            <input type="text" name='userName' id='userName' ref={usernameRef} />
        </div>
        <div className="formGroup">
            <label htmlFor="password">Password</label>
             <input type="password" name='password' id='password' ref={passwordRef} />
        </div>
       
        <button type='submit'>submit</button>
      </form>
   )
 }
 
 export default ExampleUseRef



















// function ExampleUseRef() {
//    const h1ref= useRef()
//     function handleclick(){
//         console.log(h1ref);
//         const h1Element= h1ref.current;
//         console.log(h1Element);
//         // h1Element.textContent="india"
//     }
//   return (
//     <div>
//          <h1 ref={h1ref} >Hello world</h1>
//          <button onClick={handleclick}>change content</button>
//     </div>
//   )
// }

// export default ExampleUseRef