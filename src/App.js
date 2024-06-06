import Sidebar from "./component/Aside";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import './component/Dashboard.css'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<div className="main">



     <div className="leftside">
     <Sidebar/>
     </div>


     <div className="rightside">{
     
     <Dashboard /> 
     
     }</div>


   </div>}>
      </Route>
      
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;