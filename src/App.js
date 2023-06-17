import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import About from "./Component/About/About";
import Error from "./Component/Shared/Error";
import Contact from "./Component/Contact/Contact";
import Signup from "./Component/Login/Signup";
import Admin from "./Component/Dashboard/Admin/Admin";
import DaycareAnimal from "./Component/Dashboard/Animals/DaycareAnimal";
import RescuedAnimal from "./Component/Dashboard/Animals/RescuedAnimal";
import Donation from "./Component/Home/Donation";
import Staff from "./Component/Dashboard/Staff/Staff";
import Vet from "./Component/Dashboard/Vet/Vet";
import Customers from "./Component/Dashboard/Customer/Customers";
import Feedback from "./Component/Feedback/Feedback";
import Rescuer from "./Component/Dashboard/Rescuer/Rescuer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Admin />}></Route>
          <Route path="staff" element={<Staff />}></Route>
          <Route path="vet" element={<Vet />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rescuer" element={<Rescuer />}></Route>
          <Route path="daycareAnimal" element={<DaycareAnimal />}></Route>
          <Route path="rescuedAnimal" element={<RescuedAnimal />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
