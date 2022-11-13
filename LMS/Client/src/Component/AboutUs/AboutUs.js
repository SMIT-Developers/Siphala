import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox, MDBCardBody, MDBCard
}
    from 'mdb-react-ui-kit';
import "./AbountUs.css"
import about from "../../Assets/AboutUs/Feedback-amico.svg"
import {Link} from "react-router-dom";
import mail from "../../Assets/Icon/mail.png"
import tel from "../../Assets/Icon/telephone-call.png"
import address from "../../Assets/Icon/location.png"
import school from "../../Assets/Icon/graduation-hat.png"

import Fade from 'react-reveal/Fade'

function AboutUsComp() {
    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <Fade>
                    <img src={about} alt="" className="img-pic"/>
                    </Fade>
                </MDBCol>

                <MDBCol col='4' md='6' className="top-of">
                    <MDBCard className='my-5 center-title-about contact-page '>

                        <span className="sign-up-now">
                            {/*<h2 className="fw-bold mb-3 sign-up-text">Contact Us</h2>*/}

                            <div className="icon-head mt-3">

                                     <img src={school} alt="" className="icon-pack-w"/>

                            <h3 className="ins-name">Matale International School</h3>

                            </div>

                        </span>
                        <MDBCardBody className='p-5 text-a'>


                            <div>
                                <img src={tel} alt="" className="icon-pack-w"/>
                                <span className="contact-text">  +94 702135905</span>
                            </div>

                            <div>
                                <img src={mail} alt="" className="icon-pack-w"/>
                                <span className="contact-text"> supunisup123@gmail.com</span>

                            </div>

                            <div>
                                <img src={address} alt="" className="icon-pack-w"/>
                                <span className="contact-text"> Hulangamuwa Rd, Matale, Sri Lanka</span>

                            </div>


                        </MDBCardBody>
                    </MDBCard>


                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default AboutUsComp;