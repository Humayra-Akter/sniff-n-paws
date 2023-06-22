import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";
import Dashboard from "./Component/Dashboard/Dashboard";
import About from "./Component/About/About";
import Error from "./Component/Shared/Error";
import Contact from "./Component/Contact/Contact";
import Signup from "./Component/Login/Signup";
import Admin from "./Component/Dashboard/Admin/Admin";
import DaycareAnimal from "./Component/Dashboard/Animals/DaycareAnimal";
import RescuedAnimal from "./Component/Dashboard/Animals/RescuedAnimal";
import Staff from "./Component/Dashboard/Staff/Staff";
import Vet from "./Component/Dashboard/Vet/Vet";
import Customers from "./Component/Dashboard/Customer/Customers";
import Feedback from "./Component/Feedback/Feedback";
import Rescuer from "./Component/Dashboard/Rescuer/Rescuer";
import Services from "./Component/Services/Services";
import RequireAuth from "./Component/Login/RequireAuth";
import Donation from "./Component/Donation/Donation";
import Donate from "./Component/Donation/Donate";
import FeedbackGeneral from "./Component/Feedback/FeedbackGeneral";
import FeedbackPositive from "./Component/Feedback/FeedbackPositive";
import FeedbackNegative from "./Component/Feedback/FeedbackNegative";
import HealthRecord from "./Component/Dashboard/HealthRecord/HealthRecord";
import FeedbackForAdmin from "./Component/Feedback/FeedbackForAdmin";
import FeedbackForServices from "./Component/Feedback/FeedbackForServices";
import FeedbackForVet from "./Component/Feedback/FeedbackForVet";
import FeedbackForStaff from "./Component/Feedback/FeedbackForStaff";
import Cabin from "./Component/Dashboard/Cabin/Cabin";
import LoginViewPg from "./Component/Login/LoginViewPg";
import LoginAsAdmin from "./Component/Login/LoginAsAdmin";
import LoginAsStaff from "./Component/Login/LoginAsStaff";
import LoginAsVet from "./Component/Login/LoginAsVet";
import LoginAsCustomer from "./Component/Login/LoginAsCustomer";
import FeedbackAll from "./Component/Feedback/FeedbackAll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Component/Login/Logout";
import Logout from "./Component/Login/Logout";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/positive_feedback" element={<FeedbackPositive />} />
        <Route path="/negative_feedback" element={<FeedbackNegative />} />
        <Route path="/feedbackAll" element={<FeedbackAll />} />
        <Route path="/feedback_admin_review" element={<FeedbackForAdmin />} />
        <Route
          path="/feedback_service_review"
          element={<FeedbackForServices />}
        />
        <Route
          path="/feedback_veterinarian_review"
          element={<FeedbackForVet />}
        />
        <Route path="/feedback_staff_review" element={<FeedbackForStaff />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Admin />}></Route>
          <Route path="staff" element={<Staff />}></Route>
          <Route path="vet" element={<Vet />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rescuer" element={<Rescuer />}></Route>
          <Route path="healthRecord" element={<HealthRecord />}></Route>
          <Route path="cabin" element={<Cabin />}></Route>
          <Route path="donation" element={<Donation />}></Route>
          <Route path="feedback" element={<Feedback />}></Route>
          <Route path="daycareAnimal" element={<DaycareAnimal />}></Route>
          <Route path="rescuedAnimal" element={<RescuedAnimal />}></Route>
        </Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/loginAdmin" element={<LoginAsAdmin />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/loginView" element={<LoginViewPg />}></Route>
        <Route path="/loginStaff" element={<LoginAsStaff />}></Route>
        <Route path="/loginVet" element={<LoginAsVet />}></Route>
        <Route path="/loginCustomer" element={<LoginAsCustomer />}></Route>
        <Route path="/feedbackGeneral" element={<FeedbackGeneral />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
