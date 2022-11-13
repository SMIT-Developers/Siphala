import React, {useState} from 'react';
import "./AccountBody.css"
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,

} from 'mdb-react-ui-kit';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import StudentDetails from "../StudentDetails/StudentDetails";
import ParentsDetails from "../ParentDetails/ParentDetails";


function AccountBody() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <section className="main-account-body">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100 ">

                    <MDBContainer className="main-section">

                        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>

                            <Grid container spacing={3} className="main-grid-account">
                                <Grid item xs={2} className="tab-btn-item">
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')}
                                                         active={justifyActive === 'tab1'}
                                                         className="selector-btn subject-tab shadow rounded account-tab ">
                                                Student
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')}
                                                         active={justifyActive === 'tab2'}
                                                         className="selector-btn subject-tab shadow rounded">
                                                Parent
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                            </Grid>

                            {/*Responsive button */}
                            <Grid container spacing={2} className="responsive-button-set">
                                <Grid item xs={6} className="tab-btn-item">
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')}
                                                         active={justifyActive === 'tab1'}
                                                         className="selector-btn subject-tab shadow rounded account-tab ">
                                                Student
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')}
                                                         active={justifyActive === 'tab2'}
                                                         className="selector-btn subject-tab shadow rounded">
                                                Parent
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                            </Grid>
                            {/*Responsive button */}

                        </MDBTabs>

                        <MDBTabsContent className="body-content">

                            <MDBTabsPane show={justifyActive === 'tab1'}>

                                <StudentDetails/>

                            </MDBTabsPane>

                            <MDBTabsPane show={justifyActive === 'tab2'}>

                                <ParentsDetails/>

                            </MDBTabsPane>


                        </MDBTabsContent>

                    </MDBContainer>


                </div>
            </div>

        </section>

    );
}

export default AccountBody;