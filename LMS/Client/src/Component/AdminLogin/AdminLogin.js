import React, {useState} from 'react';
import typing from "../../Assets/Admin/Admin-bro.svg";
import logo from "../../Assets/logo.png"
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
import {Link} from "react-router-dom";
import jwt from "jsonwebtoken";
import Swal from 'sweetalert2/dist/sweetalert2.all'
import fadeIn from 'react-animations/lib/fade-in'
import Radium, {StyleRoot} from 'radium';
import {bounce} from "react-animations";
import AnimatedText from 'react-animated-text-content';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function AdminLoginComp() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }

    async function handleSubmitStudent(event) {
        event.preventDefault();

        let url = "http://localhost:8070/user/admin_login"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                pw,
            }),
        })
        const data = await response.json()
        console.log(data)

        if (data.status === "ok") {
            localStorage.setItem("Admin_ID", data.Admin_ID)
            localStorage.setItem("Admin_Name", data.Student_Name)
            localStorage.setItem("Admin_email", data.Student_Address)
            localStorage.setItem("Admin_password", data.Parent_Name)

        }
        if (data.admin) {

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
            window.location.href = 'http://localhost:3001/'
        } else {
            await Swal.fire({
                title: 'Error!',
                text: 'Please check user username and password',
                icon: 'error',
                confirmButtonText: 'Ok'
            })

        }
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

                        <Fade>
                            <img src={typing}
                                 className="img-fluid main-img-section" alt="Sample image"/>
                        </Fade>

                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <div className="d-flex flex-row align-items-center justify-content-center logo-section">
                            <img src={logo} alt="Sphala-Logo" className="logo-img mb-1" style={styles.bounce}/>
                            <p className="lead fw-normal mb-1 me-3 line-height "><span
                                className="admin-name">SIPHALA <br/>
                            Admin Panel</span>
                            </p>

                        </div>

                        <MDBContainer className="main-section">


                            <MDBTabsContent>

                                <MDBTabsPane show={justifyActive === 'tab1'}>
                                    <form  onSubmit={handleSubmitStudent}>

                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Email address'
                                                  id='email' type='email' name="email" onChange={(e) => setEmail(e.target.value)}/>
                                        <MDBInput wrapperClass='mb-4' className="input-data" label='Password' id='password'
                                                  type='password' name="password" onChange={(e) => setPw(e.target.value)}/>


                                            <MDBBtn className="mb-4 w-100 input-data login-btn" >Login</MDBBtn>

                                    </form>
                                </MDBTabsPane>


                            </MDBTabsContent>

                        </MDBContainer>

                    </div>
                </div>
            </div>

        </section>

    );
}

export default AdminLoginComp;