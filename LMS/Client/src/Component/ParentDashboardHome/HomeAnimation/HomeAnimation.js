import React from "react";
import "./HomeAnimation.css"
import parent from "../../../Assets/Img/student2.jpg"
import pic1 from "../../../Assets/Img/student3.png";
import pic2 from "../../../Assets/Img/student4.png";
import pic3 from "../../../Assets/Img/student2.jpg";

function HomeAnimation() {
    return (
        <>

            <div className="shadow p-3 mb-5 bg-white rounded animation-div">

                <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view hm-black-light">
                                <img src={pic1} alt="First slide" className="parent-animation"/>
                            </div>
                            <div className="carousel-caption">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view hm-black-strong">
                                <img src={pic2} alt="First slide" className="parent-animation"/>
                            </div>
                            <div className="carousel-caption">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view hm-black-slight">
                                <img src={pic3} alt="First slide" className="parent-animation"/>
                            </div>
                            <div className="carousel-caption">

                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

                {/*<img src={animation} alt="animation" className="home-page-animation"/>*/}

            </div>
            {/*<div className="shadow p-3 mb-5 bg-white rounded animation-div">*/}
            {/*    <img src={parent} alt="animation" className="parent-animation"/>*/}

            {/*</div>*/}
        </>
    );
}

export default HomeAnimation;