import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExamplePage from "./componets/Example";
import ContactForm from "./pages/contact-us/Contact";











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
 

]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}