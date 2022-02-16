import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from "../dashboard/d ashboard";
//import Login from "../user/Login";
import Admin from "../user/role/Admin"
import User from "../user/role/User"
import Trainee from "../user/role/Trainee";
import Error from "../user/role/Error"
const Routers=()=>{
    return(
        <Router>
            <Routes>
                 <Route exact path="/" element={<Dashboard/>}/>
                 <Route exact path="/dashboard" element={<Dashboard/>}/>
                 <Route exact path="/admin" element={<Admin/>}/>
                 <Route exact path="/user" element={<User/>}/>
                 <Route exact path="/trainee" element={<Trainee/>}/>
                 <Route exact path="*" element={<Error/>}/>
            </Routes>
        </Router>
    )
}
export default Routers;
