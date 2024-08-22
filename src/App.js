import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Menubar from "./components/Menubar";
import CompanyInfoPage from "./components/companyInfo";
function App() {

  const [users, setusers] = useState([
    {
      username: "vignesh",
      password: "Vignesh123"

    }
  ])

  

  return (<BrowserRouter>
  
    <Routes>
   
      <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
      <Route path="/company-info" element={<CompanyInfoPage/>}></Route>
      
      <Route path="/signup" element={<Signup users={users} setusers={setusers} />}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App;