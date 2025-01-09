import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages import
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import Error from "./Pages/Error";
import SingleMovieDetail from "./Pages/SingleMovieDetail";

// loaders import
import { loader as fetchData } from "./Pages/Home";
import { loader as fetchSingleData } from "./Pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index  loader={fetchData} element={<Home />}/>
      <Route path="/detail/:imdbId" loader={fetchSingleData} element={<SingleMovieDetail />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
