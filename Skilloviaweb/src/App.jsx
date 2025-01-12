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
import Profile from "./pages/User-Dashboard/Settings/Myskillovia/Profile/Profile";
import KYCPage from "./pages/User-Dashboard/Settings/Myskillovia/Kyc/Kyc";
import Identification from "./pages/User-Dashboard/Settings/Myskillovia/Kyc/Identification";
import UtilityBill from "./pages/User-Dashboard/Settings/Myskillovia/Kyc/UtilityBill";
import Payment from "./pages/User-Dashboard/Settings/General/PaymentSettings/Payment";
import LinkedDevices from "./pages/User-Dashboard/Settings/General/LinkedDevice";
import NotificationSettings from "./pages/User-Dashboard/Settings/General/NotificationSettings";
import Security from "./pages/User-Dashboard/Settings/General/Security/Security";
import Bookings from "./pages/User-Dashboard/Bookings/Booking";
import ExploreSection from "./pages/User-Dashboard/Explore/Explore";











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

// ====explore====

{
  path: "/explore",
  element: <ExploreSection/>,
},

//  ===== settings======= //
{
  path: "/settings",
  element: <Settings/>,
},

{
  path: "/settings/profile",
  element: <Profile/>,
},

{
  path: "/settings/kyc",
  element: <KYCPage/>,
},

{
  path: "/settings/kyc/identification",
  element: <Identification/>,
},

{
  path: "/settings/kyc/bill",
  element: <UtilityBill/>,
},

{
  path: "/settings/payment",
  element: <Payment/>,
},

{
  path: "/settings/devices",
  element: <LinkedDevices/>,
},

{
  path: "/settings/notify",
  element: <NotificationSettings/>,
},

{
  path: "/settings/security",
  element: <Security/>,
},

{
  path: "/messages",
  element: <Message/>,
},


// bookings ===

{
  path: "/bookings",
  element: <Bookings/>,
},


]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}