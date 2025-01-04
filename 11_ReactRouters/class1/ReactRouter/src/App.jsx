
//step1-import 4 things

import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom"
import {Home,About,Contact,Post,Error,PostDetails} from "./Pages"
import RootLayout from "./Layouts/RootLayout"

// step2- create Router
const router= createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="post" element={<Post/>}/>
    <Route path="post/:id" element={<PostDetails/>}/>
    <Route path="*" element={<Error/>}/>
  </Route>
))

function App() {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App