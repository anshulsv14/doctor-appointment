
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DoctorLogin from "./pages/Doctorlogin";
import SearchDoctor from "./pages/SearchDoctor";
import DoctorDashBoard from "./DoctorDashboard";



const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="doctorlogin" element={<DoctorLogin/>}/>
        <Route path="doctorsearch" element={<SearchDoctor/>}/>
        
        </Route>
      </Routes>
      <Routes>
         <Route path="doctordashboard" element={<DoctorDashBoard/>}>
         
         </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
