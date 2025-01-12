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
import Phone from "./pages/auth/signup/Phone";
import Otp from "./pages/auth/signup/Otp";
import SignUp from "./pages/auth/signup/S";
import User from "./pages/User-Dashboard/UserLayout/User";
import Settings from "./pages/User-Dashboard/Settings/Settings";
import Message from "./pages/User-Dashboard/Chat/Message";











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


{
  path: "/signup",
  element: <Phone/>,
},


{
  path: "/s",
  element: <SignUp/>,
},


{
  path: "/otp",
  element: <Otp/>,
},


//  ===== auth ======= //




//  ===== user ======= //

{
  path: "/user",
  element: <User/>,
},


{
  path: "/settings",
  element: <Settings/>,
},


{
  path: "/messages",
  element: <Message/>,
},


]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}