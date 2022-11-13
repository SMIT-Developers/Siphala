import React, {useState} from 'react';
import {MDBContainer, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane,} from 'mdb-react-ui-kit';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
// import EnglishActivityOne from "../Activities/English/EnglishActivityOne";
// import EnglishActivityTwo from "../Activities/English/EnglishActivityTwo";
// import MathsActivityOne from "../Activities/Maths/MathsActivityOne";
// import MathsActivityTwo from "../Activities/Maths/MathsActivityTwo";
import "./ActivityBody.css"
import EnglishActivityTable from "../Activities/English/EnglishActivityTable";
// import EnvironmentalActivityOne from "../Activities/Environmental/EnvironmentalActivityOne";
import MathsActivityTable from "../Activities/Maths/MathsActivityTable";
import EnvironmentalActivityTable from "../Activities/Environmental/EnvironmentalActivityTable";

function ActivityBody() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const [englishActivity, setEnglishActivity] = useState(0);
    const [mathsActivity, setMathsActivity] = useState(1);
    const [environmentalActivity, setEnvironmentalActivity] = useState(2);

    const handleEnglishNext = () => {
        setEnglishActivity(2);
    }

    const handleMathsNext = () => {
        setMathsActivity(2);
    }
    // const handleEnvironmentalNext = () => {
    //     setMathsActivity(3);
    // }
    return (
        <section>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <MDBContainer className="main-section">
                        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>

                            <Grid container spacing={3}>
                                <Grid item xs={4} className="tab-btn-item">
                                    <Item className="grid-item">
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')}
                                                         active={justifyActive === 'tab1'}
                                                         className="selector-btn subject-tab shadow rounded ">
                                                English
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                                <Grid item xs={4} className="tab-btn-item">
                                    <Item className="grid-item">
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')}
                                                         active={justifyActive === 'tab2'}
                                                         className="selector-btn subject-tab shadow rounded">
                                                Maths
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>

                                <Grid item xs={4} className="tab-btn-item-hidden">
                                    <Item className="grid-item">


                                        <MDBTabsItem>
                                            <MDBTabsLink
                                                onClick={() => handleJustifyClick('tab3')}
                                                active={justifyActive === 'tab3'}
                                                className="selector-btn subject-tab shadow rounded">
                                                <span className="envi-dis">Environmental Studies</span>
                                                <span className="envi-dis-res">E.study</span>
                                            </MDBTabsLink>
                                        </MDBTabsItem>

                                    </Item>
                                </Grid>
                            </Grid>

                        </MDBTabs>

                        <MDBTabsContent className="body-content">

                            <MDBTabsPane show={justifyActive === 'tab1'}>
                                <EnglishActivityTable/>
                            </MDBTabsPane>

                            <MDBTabsPane show={justifyActive === 'tab2'}>
                                <MathsActivityTable/>
                            </MDBTabsPane>

                            <MDBTabsPane show={justifyActive === 'tab3'}>
                                <EnvironmentalActivityTable/>
                            </MDBTabsPane>

                        </MDBTabsContent>

                    </MDBContainer>
                </div>
            </div>

        </section>

    );
}

export default ActivityBody;