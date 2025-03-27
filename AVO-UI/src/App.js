import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About.tsx";
import HowItsWork from "./pages/HowItsWork.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Events from "./pages/Events.tsx";
import Register from "./pages/Register.tsx";
import SignInAccount from "./pages/SignIn";
import Dashbaord from "./pages/Dashbaord.tsx";
import OtpScreen from "./pages/OtpScreen.tsx";
import ForgotPwd from "./pages/ForgetPwd.tsx";
import Profile from "./pages/Profile.tsx";
import Bussiness from "./pages/Bussiness.tsx";
import Community from "./pages/Community.tsx";
import DashboardLayout from "./Layouts/DashboardLayout.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileDashboard from "./Dashboard/ProfileDashboard.tsx";
import CreateOffers from "./Dashboard/DashEvents.tsx";
import CommunityOffers from "./Dashboard/CommunityOffers.tsx";
import Signout from "./Dashboard/Signout.tsx";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ResetPwd from "./pages/ResetPwd.tsx";
import RouteGuard from "./services/routeGuard/routeGuard";
import CreateBusiness from "./pages/CreateBusiness";
const App = () => {
  AOS.init();
  useEffect(() => {
    AOS.init({
      disable: function () {
        return window.innerWidth < 768; // Disable AOS on mobile
      },
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <Router>
      <Routes>
        //Homa page routes
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItsWork />} />
        <Route path="/businesses" element={<Bussiness />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignInAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/forgot-password" element={<ForgotPwd />} />
        <Route path="/reset-password" element={<ResetPwd />} />
        //Dashboard routes
        <Route path="/dashboard" element={<RouteGuard />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashbaord />} />
            <Route path="CommunityOffers" element={<CommunityOffers />} />
            <Route path="profile" element={<ProfileDashboard />} />
            <Route path="create-offers" element={<CreateOffers />} />
            <Route path="create-business" element={<CreateBusiness />} />
            <Route path="signout" element={<Signout />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
