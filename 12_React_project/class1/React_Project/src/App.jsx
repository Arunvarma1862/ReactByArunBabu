import { apikey } from "./constants.js";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
const router= createBrowserRouter(createRoutesFromElements(<Route>

</Route>))

function App() {
  console.log(apikey);

  return <>
     <RouterProvider router={router}/> 
  </>
}

export default App;
