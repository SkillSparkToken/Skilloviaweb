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
import BookProfile from "./pages/User-Dashboard/Bookings/Book-A-Service/BookProfile";
import BookService from "./pages/User-Dashboard/Bookings/Book-A-Service/BookService";
import BookingForm from "./pages/User-Dashboard/Bookings/Book-A-Service/BookForm";
import OutwardDetails from "./pages/User-Dashboard/Bookings/Outward/OutwardDetails";
import OutwardProgress from "./pages/User-Dashboard/Bookings/Outward/OutwardProgress";
import InwardDetails from "./pages/User-Dashboard/Bookings/Inward/InwardDetails";
import Community from "./pages/User-Dashboard/Community/Community";
import MySkillsPage from "./pages/User-Dashboard/Settings/Myskillovia/MySkills/Myskill";
import SkillDetails from "./pages/User-Dashboard/Settings/Myskillovia/MySkills/SkillDetails";
import AddSkill from "./pages/User-Dashboard/Settings/Myskillovia/MySkills/AddSkill/AddSkill";
import ChatMobile from "./pages/User-Dashboard/Chat/MessageMobile/ChatMobile";
import ChatMobileDetails from "./pages/User-Dashboard/Chat/MessageMobile/ChatMobileDetails";
import PasswordReset from "./pages/User-Dashboard/Settings/General/Security/PasswordRest";
import ExploreList from "./pages/User-Dashboard/Explore/ExploreList";
import ProtectedRoute from "./Hooks/ProtectedRoutes";
import Search from "./pages/Search/Search";

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
  
  // Protected Routes
  {
    path: "/user",
    element: <ProtectedRoute><User/></ProtectedRoute>,
  },
  {
    path: "/explore",
    element: <ProtectedRoute><ExploreSection/></ProtectedRoute>,
  },
  {
    path: "/explore-list",
    element: <ProtectedRoute><ExploreList/></ProtectedRoute>,
  },
  {
    path: "/settings",
    element: <ProtectedRoute><Settings/></ProtectedRoute>,
  },
  {
    path: "/settings/profile",
    element: <ProtectedRoute><Profile/></ProtectedRoute>,
  },
  {
    path: "/settings/skills",
    element: <ProtectedRoute><MySkillsPage/></ProtectedRoute>,
  },
  {
    path: "/settings/skill/add",
    element: <ProtectedRoute><AddSkill/></ProtectedRoute>,
  },
  {
    path: "/settings/skills-details",
    element: <ProtectedRoute><SkillDetails/></ProtectedRoute>,
  },
  {
    path: "/settings/kyc",
    element: <ProtectedRoute><KYCPage/></ProtectedRoute>,
  },
  {
    path: "/settings/kyc/identification",
    element: <ProtectedRoute><Identification/></ProtectedRoute>,
  },
  {
    path: "/settings/kyc/bill",
    element: <ProtectedRoute><UtilityBill/></ProtectedRoute>,
  },
  {
    path: "/settings/payment",
    element: <ProtectedRoute><Payment/></ProtectedRoute>,
  },
  {
    path: "/settings/password",
    element: <ProtectedRoute><PasswordReset/></ProtectedRoute>,
  },
  {
    path: "/settings/devices",
    element: <ProtectedRoute><LinkedDevices/></ProtectedRoute>,
  },
  {
    path: "/settings/notify",
    element: <ProtectedRoute><NotificationSettings/></ProtectedRoute>,
  },
  {
    path: "/settings/security",
    element: <ProtectedRoute><Security/></ProtectedRoute>,
  },
  {
    path: "/messages",
    element: <ProtectedRoute><Message/></ProtectedRoute>,
  },
  {
    path: "/chat-details",
    element: <ProtectedRoute><ChatMobileDetails/></ProtectedRoute>,
  },
  {
    path: "/bookings",
    element: <ProtectedRoute><Bookings/></ProtectedRoute>,
  },
  {
    path: "/book-profile",
    element: <ProtectedRoute><BookProfile/></ProtectedRoute>,
  },
  {
    path: "/book-service",
    element: <ProtectedRoute><BookService/></ProtectedRoute>,
  },
  {
    path: "/book-form",
    element: <ProtectedRoute><BookingForm/></ProtectedRoute>,
  },
  {
    path: "/outward-progress",
    element: <ProtectedRoute><OutwardProgress/></ProtectedRoute>,
  },
  {
    path: "/outward-details",
    element: <ProtectedRoute><OutwardDetails/></ProtectedRoute>,
  },
  {
    path: "/inward-details",
    element: <ProtectedRoute><InwardDetails/></ProtectedRoute>,
  },
  {
    path: "/community",
    element: <ProtectedRoute><Community/></ProtectedRoute>,
  },


  {
    path: "/search",
    element: <ProtectedRoute><Search/></ProtectedRoute>,
  },

]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}