//step1-import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Post, Error, PostDetails, Login } from "./Pages";
import RootLayout from "./Layouts/RootLayout";
import RequiredAuth from "./Components/RequiredAuth";
import AuthProvider, { useAuth } from "./Context/AuthProvider";
import { fetchData } from "./Pages/Post";
import { loader as fetchPost } from "./Pages/PostDetails";

function App() {
  const { isLoggedIn} = useAuth(); 
  // step2- create Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<h1>Something went wrong!!!</h1>}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="post"
          loader={(args) => {
            return fetchData(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error />}
          element={<Post />}
        />
        <Route
          path="post/:id"
          loader={(args) => {
            return fetchPost(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error />}
          element={<PostDetails />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
