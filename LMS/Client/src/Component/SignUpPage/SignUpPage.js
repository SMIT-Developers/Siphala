// import React from 'react';
// import {
//     MDBContainer,
//     MDBCol,
//     MDBRow,
//     MDBBtn,
//     MDBIcon,
//     MDBInput,
//     MDBCheckbox
// }
//     from 'mdb-react-ui-kit';
// import "./SignUpPage.css"
//
// function SignUpComp() {
//     return (
//         <MDBContainer fluid className="p-3 my-5">
//
//             <MDBRow className="sign-up-body">
//
//                 <MDBCol col='10' md='6'>
//                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
//                 </MDBCol>
//
//                 <MDBCol col='4' md='6'>
//
//
//                     <MDBInput wrapperClass='mb-4' label='First Name' id='formControlLg' type='text' size="lg"/>
//                     <MDBInput wrapperClass='mb-4' label='Last Name' id='formControlLg' type='text' size="lg"/>
//                     <MDBInput wrapperClass='mb-4' label='Index Number' id='formControlLg' type='text' size="lg"/>
//                     <MDBInput wrapperClass='mb-4' label="Parent's Telephone Number" id='formControlLg' type='tel' size="lg"/>
//                     <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
//
//
//                     <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
//
//
//
//                 </MDBCol>
//
//             </MDBRow>
//
//         </MDBContainer>
//     );
// }
//
// export default SignUpComp;


import React from 'react';
import "./SignUpPage.css"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import signUp from "../../Assets/SignUp/SignUp.svg"
import {Link} from "react-router-dom";
function SignUpComp() {
    return (
        <MDBContainer fluid className='p-4'>

            <MDBRow className="sign-up-body">

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <img src={signUp} alt=""/>

                </MDBCol>

                <MDBCol md='6'>

                    <MDBCard className='my-5' className='center-title-about'>

                        <span className="sign-up-now">
                            <h2 className="fw-bold mb-5 sign-up-text">Sign up now</h2>

                        </span>
                        <MDBCardBody className='p-5' >


                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                                </MDBCol>
                            </MDBRow>


                            <MDBInput wrapperClass='mb-4' label='Index Number' id='formControlLg' type='text'
                                      size="lg"/>
                            <MDBInput wrapperClass='mb-4' label="Parent's Telephone Number" id='formControlLg'
                                      type='tel' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password'
                                      size="lg"/>


                            <MDBBtn className='w-100 mb-4 login-btn' size='md'>sign up</MDBBtn>
                            <Link to="/" className="link-deco">

                                    <span className="guest-title">
                                        Continue as guest
                                    </span>

                            </Link>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUpComp;