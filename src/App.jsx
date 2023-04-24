import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/components/common/Header";
import Footer from "./pages/components/common/Footer";
import Home from "./pages/home/Index";
import Service from "./pages/service/Index";
import Contact from "./pages/contact/Index";
import Register from "./pages/register/Index";
import Login from "./pages/login/Index";
import UserDatas from "./pages/userdetails/UserDatas";
import UpdateData from "./pages/updatedata/UpdateData";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/userdata" element={<Userdata />} /> */}
          <Route path="/userdetail" element={<UserDatas />} />
          {/* <Route path="/updatedata/:index" element={<UpdateData />} /> */}
          {/* <Route path="/updatedata/:id" element={<UpdateData />} /> */}
          <Route path="/edit/:id" element={<UpdateData />} />
          <Route path="/logout" element={<Home />} />

          <Route path="/service" element={<Service />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
