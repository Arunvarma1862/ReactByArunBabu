import { apikey } from "./constants.js";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Root from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import SingleMoviePage from "./Pages/SingleMoviePage.jsx";
import Error from "./Pages/Error.jsx"
import { loader as serch} from "./Pages/Home.jsx";
import { loader as singleMovieDetail } from "./Pages/SingleMoviePage.jsx";


const router= createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Root/>} errorElement={<Error/>}>
     <Route index loader={serch} element={<Home/>}/>
     <Route path="/detail/:imdbId" loader={singleMovieDetail} element={<SingleMoviePage/>}/>
</Route>))

function App() {
  // console.log(apikey);
  return <>
     <RouterProvider router={router}/> 
  </>
}

export default App;
