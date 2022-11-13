import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import Navbar from "../../Component/Navbar/Navbar";
import Description from "../../Component/HomePage/Description/Description";
import auth from "../../auth/auth";
function Home() {
    return (
        <>
            <Navbar/>
            <Description/>
        </>
    );
}

export default Home;