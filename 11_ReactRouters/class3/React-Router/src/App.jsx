import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Posts,
  Error,
  PostDetails,
  Login,
} from "./Pages";
import RootLayout from "./Layouts/RootLayout";
import RequiredAuth from "./Components/RequiredAuth";
import { loader as fetchPosts } from "./Pages/Posts";
import { loader as fetchSinglePost } from "./Pages/PostDetails";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<h1>Something went wrong</h1>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="posts"
          loader={(args) => {
           return  fetchPosts(args,{isLoggedIn:isLoggedIn});
          }}
          errorElement={<Error/>}
          element={
              <Posts /> 
          }
        />
        <Route
          path="posts/:id"
          loader={(args) => {
            return fetchSinglePost(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error/>}
          element={
              <PostDetails />       
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
