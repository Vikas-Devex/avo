import React, {useEffect} from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-load components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const HowItsWork = React.lazy(() => import("./pages/HowItsWork"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const Events = React.lazy(() => import("./pages/Events"));
const Register = React.lazy(() => import("./pages/Register"));
const SignInAccount = React.lazy(() => import("./pages/SignIn"));
const Dashbaord = React.lazy(() => import("./pages/Dashbaord"));
const OtpScreen = React.lazy(() => import("./pages/OtpScreen"));
const ForgotPwd = React.lazy(() => import("./pages/ForgetPwd"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Bussiness = React.lazy(() => import("./pages/Bussiness"));
const Community = React.lazy(() => import("./pages/Community"));
const DashboardLayout = React.lazy(() => import("./Layouts/DashboardLayout"));
const ProfileDashboard = React.lazy(() => import("./Dashboard/ProfileDashboard"));
const CreateOffers = React.lazy(() => import("./Dashboard/DashEvents"));
const CommunityOffers = React.lazy(() => import("./Dashboard/CommunityOffers"));
const Signout = React.lazy(() => import("./Dashboard/Signout"));
const ResetPwd = React.lazy(() => import("./pages/ResetPwd"));
const RouteGuard = React.lazy(() => import("./services/routeGuard/routeGuard"));
const CreateBusiness = React.lazy(() => import("./pages/CreateBusiness"));
const ViewValidEmployee = React.lazy(() => import("./pages/viewValidEmployee"));
const Loader = React.lazy(() => import("./services/loader/loader"))

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

  const loading = useSelector((state) => state?.activity?.loading);
  return (
    <Router>
      <React.Suspense fallback={loading ? <Loader /> : <Loader />}>
      <Routes>
        {/* Homa page routes */}
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
        {/* Dashboard routes */}
        <Route path="/dashboard" element={<RouteGuard />}>
          <Route element={<DashboardLayout />}>
          <Route index element={<Dashbaord />} />
          <Route path="CommunityOffers" element={<CommunityOffers />} />
          <Route path="profile" element={<ProfileDashboard />} />
          <Route path="create-offers" element={<CreateOffers />} />
          <Route path="create-business" element={<CreateBusiness />} />
          <Route path="employee/:id" element={<ViewValidEmployee />} />
          <Route path="signout" element={<Signout />} />
          </Route>
        </Route>
      </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
