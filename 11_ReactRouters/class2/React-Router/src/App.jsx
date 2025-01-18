import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import { Home ,About,Contact,Posts,Error,PostDetails,Login} from './PagesRouter'
import RootLayout from './Layouts/RootLayout'
import RequiredAuth from './Components/RequiredAuth'
import AuthProvider from './Context/AuthProvider'


const router = createBrowserRouter(createRoutesFromElements(<Route>
  <Route path="/" element={<RootLayout/>}> 
     <Route index element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='posts' element={<RequiredAuth><Posts/></RequiredAuth>}/>
     <Route path='posts/:id' element={<PostDetails/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='*' element={<Error/>}/>
     </Route>
</Route>))

function App() {
  return ( 
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App