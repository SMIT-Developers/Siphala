import React from "react";
import "./StudentHomeAnimation.css"
import pic1 from "../../../Assets/Img/student.jpg"
import pic2 from "../../../Assets/Img/student3.png"
import pic3 from "../../../Assets/Img/student2.jpg"

function StudentHomeAnimation() {
    return (
        <>
            <div className="shadow p-3 mb-5 bg-white rounded animation-div">

                <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="view hm-black-light">
                                <img src={pic1} alt="First slide" className="parent-animation"/>
                            </div>
                            <div class="carousel-caption">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="view hm-black-strong">
                                <img src={pic2} alt="First slide" className="parent-animation"/>
                            </div>
                            <div class="carousel-caption">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="view hm-black-slight">
                                <img src={pic3} alt="First slide" className="parent-animation"/>
                            </div>
                            <div class="carousel-caption">

                            </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>

                {/*<img src={animation} alt="animation" className="home-page-animation"/>*/}

            </div>
        </>
    );
}

export default StudentHomeAnimation;