
//step1-import 4 things

import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom"
import {Home,About,Contact,Post,Error,PostDetails,Login} from "./Pages"
import RootLayout from "./Layouts/RootLayout"
import RequiredAuth from "./Components/RequiredAuth" 
import AuthProvider from "./Context/AuthProvider" 
 

// step2- create Router
const router= createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="post" element={<RequiredAuth><Post/></RequiredAuth>}/>
    <Route path="post/:id" element={<RequiredAuth><PostDetails/></RequiredAuth>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="*" element={<Error/>}/>
  </Route>
))

function App() {
  return (
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App