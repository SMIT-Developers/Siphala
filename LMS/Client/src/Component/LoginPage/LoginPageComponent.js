import "./LoginPageComponent.css"
import React, {useState, useEffect} from 'react';
import typing from "../../Assets/Images/Typing-bro.svg"
import logo from "../../Assets/logo.png"
import { useDispatch } from 'react-redux';
// import { siginStudent, siginParent } from '../../actions/auth';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

import {Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import jwt from "jsonwebtoken";
import Swal from 'sweetalert2/dist/sweetalert2.all'
import sha1 from 'sha1'
import bcrypt from 'bcryptjs'
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

function SignInCom() {


    const [studentUsername, setStudentUsername] = useState('');
    const [studentpassword, setStudentpassword] = useState('');
    const [studentpasswordAg, setStudentPasswordAg] = useState('');

    const [parentEmail, setParentEmail] = useState('');
    const [parentPassword, setParentPassword] = useState('');
    const [parentPasswordAg, setParentPasswordAg] = useState('');

    const [justifyActive, setJustifyActive] = useState('tab1');
    const [formErrors, setformErrors] = useState('')


    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    }



    async function handleSubmitStudent(event) {
        event.preventDefault();

        if(checkPasswords("std")){
            let url = "http://localhost:8070/user/student_login"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    studentUsername,
                    studentpassword,

                }),
            })


            const data = await response.json()
            console.log(data)

            if (data.status === "ok") {
                localStorage.setItem("token", data.student)
                localStorage.setItem("std_id", data.std_id)
                localStorage.setItem("Student_Name", data.Student_Name)
                localStorage.setItem("Student_Address", data.Student_Address)
                localStorage.setItem("Parent_Name", data.Parent_Name)
                localStorage.setItem("Parent_Telephone", data.Parent_Telephone)

            }
            if (data.student) {

                const token = localStorage.getItem('token')

                if (token) {
                    const user = jwt.decode(token)
                    console.log(user)
                    if (!user) {
                        localStorage.removeItem("token")
                        // window.location.href='/login'
                        // alert("You need to log in first")
                        await Swal.fire({
                            title: 'Warning!',
                            text: 'You need to log in first',
                            icon: 'warning',
                            confirmButtonText: 'Ok'
                        })
                    }
                }

                await Swal.fire({
                    title: 'Success!',
                    text: 'Login Successful....',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                window.location.href = '/student-dashboard-home'
            } else {
                await Swal.fire({
                    title: 'Error!',
                    text: 'Please check user username and password',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
        }



        }

        else { await Swal.fire({
            title: 'Error!',
            text: 'Password Miss matched',
            icon: 'error',
            confirmButtonText: 'Ok'
        })}
    }


     function checkPasswords( TYPE) {


        if (TYPE === "std") {
            return studentpassword === studentpasswordAg;
        } else if (TYPE === "prt") {
            return parentPassword === parentPasswordAg;
        }


    }


    async function handleSubmitParent(e) {

        e.preventDefault();
        if(checkPasswords("prt")){
            let url = "http://localhost:8070/user/parent_login"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    parentEmail,
                    parentPassword,
                    parentPasswordAg,
                }),
            })

            const data = await response.json()
            console.log(data)

            if (data.status === "ok") {


                localStorage.setItem("token", data.prt_id)
                localStorage.setItem("Student_ID", data.std_id)
                localStorage.setItem("Student_Name", data.Student_Name)
                localStorage.setItem("Student_Address", data.Student_Address)
                localStorage.setItem("Parent_Name", data.Parent_Name)
                localStorage.setItem("Parent_Telephone", data.Parent_Telephone)
                localStorage.setItem("Parent_Mail", data.Parent_Mail)
            }





            if (data.prt_id) {

                const token = localStorage.getItem('token')


                if (token) {
                    const user = jwt.decode(token)
                    console.log(user)
                    if (!user) {
                        localStorage.removeItem("token")
                        // window.location.href='/login'
                        await Swal.fire({
                            title: 'Warning!',
                            text: 'You need to log in first.',
                            icon: 'warning',
                            confirmButtonText: 'Ok'
                        })
                    }

                    await Swal.fire({
                        title: 'Success!',
                        text: 'Login Successful....',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    // alert('Login Successful')
                    window.location.href = '/parent-dashboard-home'
                } else {
                    await Swal.fire({
                        title: 'Error!',
                        text: 'Please check user username and password',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
                console.log(data)


            }
        }
        else { await Swal.fire({
            title: 'Error!',
            text: 'Password Miss matched',
            icon: 'error',
            confirmButtonText: 'Ok'
        })}


    }



    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-md-9 col-lg-6 col-xl-5 ">

                        <div className="d-flex flex-row align-items-center justify-content-center logo-section-res">
                            <p className="lead fw-normal mb-1 me-3 line-height "><span
                                className="admin-name-res">SIPHALA</span></p>
                        </div>
                            <LightSpeed>
                                <img src={typing}
                                     className="img-fluid main-img-section" alt="Sample image"/>
                            </LightSpeed>

                    </div>
                <Fade>


                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <div className="d-flex flex-row align-items-center justify-content-center logo-section">
                            <img src={logo} alt="Sphala-Logo" className="logo-img mb-1"/>
                            <p className="lead fw-normal mb-1 me-3 line-height "><span
                                className="admin-name">SIPHALA</span></p>

                        </div>



                        <MDBContainer className="main-section">

                            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                                <div className="student">

                                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')}
                                                 active={justifyActive === 'tab1'}
                                                 className="selector-btn selection-btn"
                                    >
                                        Student
                                    </MDBTabsLink>
                                </div>
                                <MDBTabsItem>

                                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')}
                                                 active={justifyActive === 'tab2'}
                                                 className="selector-btn selection-btn">
                                        Parent
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>

                                <MDBTabsPane show={justifyActive === 'tab1'} className='center-title'>

                                    <form  onSubmit={handleSubmitStudent}>

                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Username'
                                                  id='username' type='text' name="formStudent[username]" onChange={(e) => setStudentUsername(e.target.value)}/>
                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Password' id='password'
                                                  type='password' name="formStudent[password]" onChange={(e) => setStudentpassword(sha1(e.target.value))}/>
                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Password Retype' id='c_password'
                                                  type='password' name="formStudent[c_password]" onChange={(e) => setStudentPasswordAg(sha1(e.target.value))}/>

                                        <Button type="submit" >
                                            <MDBBtn className="mb-4 w-100 input-data login-btn">Login</MDBBtn>
                                        </Button>

                                    </form>

                                    <Link to="/" className="link-deco">

                                    <span className="guest-title">
                                        Continue as guest
                                    </span>

                                    </Link>
                                </MDBTabsPane>

                                <MDBTabsPane show={justifyActive === 'tab2'} className='center-title'>

                                    <form  onSubmit={handleSubmitParent}>


                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Email' id='email'
                                                  type='email' onChange={(e) => setParentEmail(e.target.value)} />
                                        <MDBInput wrapperClass='mb-4' className="input-data" label='password' id='password'
                                                  type='password' onChange={(e) => setParentPassword(sha1(e.target.value))}/>
                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Password Retype' id='c_password'
                                                  type='password' name="c_password" onChange={(e) => setParentPasswordAg(sha1(e.target.value))}/>



                                        <Button type="submit" >
                                            <MDBBtn className="mb-4 w-100 input-data login-btn">Login</MDBBtn>
                                        </Button>

                                    </form>

                                    <Link to="/" className="link-deco">

                                    <span className="guest-title">
                                        Continue as guest
                                    </span>

                                    </Link>

                                </MDBTabsPane>

                            </MDBTabsContent>

                        </MDBContainer>

                    </div>
                </Fade>
                </div>
            </div>

        </section>

    );
}

export default SignInCom;