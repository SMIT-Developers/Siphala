import React, {useState} from 'react';
import logo from "../../Assets/logo.png"
import "./Navbar.css"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light className="bg-color">
            <MDBContainer fluid className='class-fuild'>
                <Link to={"/"}>
                    <img src={logo} alt="logo" className="nav-bar-logo"/>
                </Link>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
                        <MDBNavbarItem>
                            <Link to={"/"} className="link-ch">
                                <MDBNavbarLink active aria-current='page' className="font-color-ch">
                                    Home
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <Link to={"/aboutUs"} className="link-ch">
                                <MDBNavbarLink active aria-current='page' className="font-color-ch">
                                    Contact Us
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>


                        <MDBNavbarItem>
                            <Link to={"/admin-login"} className="link-ch">
                                <MDBNavbarLink active aria-current='page' className="font-color-ch">
                                    My Account
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>

                        <div className="login-btn-nav-bar">
                            <Link to={"/login"} className="link-ch">
                                <Button variant="outlined" className="loin-btn-mar btn-color-l">Login</Button>
                            </Link>

                            {/*<Link to={"/sign-up"} className="link-ch">*/}
                            {/*    <Button variant="contained" className="btn-color-c">Sign Up</Button>*/}
                            {/*</Link>*/}
                        </div>
                    </MDBNavbarNav>


                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}