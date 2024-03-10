import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import RegisterForm from './components/RegisterForm/RegisterForm'
import LogIn from './components/auth/LogIn';
import LeadSearch from './components/LeadSearch/LeadSearch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
          <Route path="/" element={<><RegisterForm/></>} />
          <Route path="/login" element={<LogIn/>} />      
          <Route path="/search" element={<LeadSearch/>}/>
        </Routes>
    </>
  )
}

export default App
