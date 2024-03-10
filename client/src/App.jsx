import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LogIn from "./components/auth/LogIn";
import LeadSearch from "./components/LeadSearch/LeadSearch";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/home/Home"
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Courses from "./components/Courses/Courses";
import UpdateCourse from "./components/UpdateCourse/UpdateCourse";
import LeadUpdate from "./LeadUpdate/LeadUpdae";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="super-nav-bar">
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/search" element={<LeadSearch />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/create" element={<CreateCourse/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:course_id" element={<UpdateCourse/>}/>
        <Route path="/leads/:lead_id" element={<LeadUpdate/>}/> 

      </Routes>
    </>
  );
}

export default App;
