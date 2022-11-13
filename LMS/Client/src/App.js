import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import LoginPage from "./View/LoginPage/LoginPage";
import ParentDashboardHome from "./View/ParentDashboardHome/ParentDashboardHome";
import ParentDashboardProgress from "./View/ParentDashboardProgress/ParentDashboardProgress";
import ParentDashboardNotification from "./View/ParentDashboardNotification/ParentDashboardNotification";
import ParentDashboardAccount from "./View/ParentDashboardAccount/ParentDashboardAccount";
import StudentDashboardHome from "./View/StudentDashboardHome/StudentDashboardHome";
import StudentDashboardActivity from "./View/StudnetDashboardActivity/StudnetDashboardActivity";
import StudentDashboardAccount from "./View/StudnetDashboardAccount/StudnetDashboardAccount";
import Home from "./View/Home/HomePage";
import AdminLogin from "./View/AdminLogin/AdminLogin";
import SignUp from "./View/SignUp/SignUp";
import AboutUs from "./View/AboutUs/AboutUs";
import EnglishActivityTable from "./Component/StudentDashBoardActivity/Activities/English/EnglishActivityTable";


function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/parent-dashboard-home" element={<ParentDashboardHome />}/>
                    <Route path="/parent-dashboard-activity" element={<ParentDashboardProgress/>}/>
                    <Route path="/parent-dashboard-notification" element={<ParentDashboardNotification/>}/>
                    <Route path="/parent-dashboard-account" element={<ParentDashboardAccount/>}/>


                    <Route path="/student-dashboard-home" element={<StudentDashboardHome/>}/>
                    <Route path="/student-dashboard-activity" element={<StudentDashboardActivity/>}/>
                    <Route path="/student-dashboard-account" element={<StudentDashboardAccount/>}/>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/admin-login" element={<AdminLogin/>}/>
                    {/*<Route path="/sign-up" element={<SignUp/>}/>*/}

                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/englishActivityTable" element={<EnglishActivityTable/>}/>

                </Routes>
            </Router>


        </>
    );
}

export default App;
