import React from "react";
import "./Description.css"
import backgroundPic from "../../../Assets/Home/kisd-lms.svg"
import AnimatedText from 'react-animated-text-content';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
function Description() {
    return (
        <div className='description-main'>

            <section className="">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-md-8 col-lg-6 col-xl-4 ">
                            <form>

                                <AnimatedText
                                    type="words" // animate words or chars
                                    animation={{
                                        x: '200px',
                                        y: '-20px',
                                        scale: 1.1,
                                        ease: 'ease-in-out',
                                    }}
                                    animationType="float"
                                    interval={0.06}
                                    duration={0.8}
                                    tag="p"
                                    className="animated-paragraph heading-name"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%"
                                >
                                    Welcome To SIPHALA

                                </AnimatedText>
                                <AnimatedText className="heading-name">Welcome To <br/> SIPHALA</AnimatedText>
                                <AnimatedText className="dis-par">Experience The Best Online Platform To The
                                    Grade 1 Students.</AnimatedText>

                            </form>
                        </div>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <Fade>
                                <img src={backgroundPic}
                                     className="img-fluid" alt="Sample image"/>
                            </Fade>

                        </div>
                    </div>

                </div>

            </section>


        </div>

    );
}
export default Description;