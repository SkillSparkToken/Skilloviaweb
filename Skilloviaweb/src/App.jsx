import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExamplePage from "./componets/Example";
import ContactForm from "./pages/contact-us/Contact";
import FAQSection from "./pages/faq/Faq";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetails";
import LoginPage from "./pages/auth/login/Login";











const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
 

  {
    path: "/ex",
    element: <ExamplePage/>,
  },

  {
    path: "/contact",
    element: <ContactForm/>,
  },

  {
    path: "/faqs",
    element: <FAQSection/>,
  },


  {
    path: "/blog",
    element: <Blog/>,
  },
 


  {
    path: "/blog-details",
    element: <BlogDetail/>,
  },
//  ===== auth ======= //

{
  path: "/login",
  element: <LoginPage/>,
},


//  ===== auth ======= //
 

]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}