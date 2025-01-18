import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Layouts/Root";
import {
  Home,
  About,
  Contact,
  Errror,
  Posts,
  PostDetails,
  Login,
} from "./Router_Pages";
import RequiredAuth from "./Component/RequiredAuth";
import { useAuth } from "./Context/AuthProvider";
import { loader as fetchPosts } from "./Router_Pages/Posts";
import { loader as singleFetchPosts } from "./Router_Pages/PostDetails";

function App() {
  const { isLogged } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        errorElement={<h1>Something went wrong</h1>}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="posts"
          element={<Posts />}
          loader={(args) => {
            return fetchPosts(args, { isLogged: isLogged });
          }}
          errorElement={<Errror />}
        />
        <Route
          path="posts/:id"
          element={<PostDetails />}
          loader={(args) => {
            return singleFetchPosts(args, { isLogged: isLogged });
          }}
          errorElement={<Errror />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Errror />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
