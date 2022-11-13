import "./reports.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Form from 'react-bootstrap/Form';

import "./reports.css";
import Button from 'react-bootstrap/Button';


 import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';



export default function Reports() {



return (


    <Container fluid className="mb-2">

      
    <Row>
      <Col>
    <h1 style={{ fontSize: "50px" }} >Reports</h1>


    </Col>
    </Row>


    <Row  >

    <Col>
      <DropdownButton id="dropdown-basic-button" title="Select student name" className="mb-2">
      <Dropdown.Item href="#/action-1">Nimal</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Saduni</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Waruna</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Gamini</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Asanka</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Malithi</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Geethika</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Ggani</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Ayanthi</Dropdown.Item>
      </DropdownButton>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Select all students"
      />

      </Col>


      <Col>
      
      <DropdownButton id="dropdown-basic-button" title="Select subject">
      <Dropdown.Item href="#/action-1">Maths</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Religion</Dropdown.Item>
      <Dropdown.Item href="#/action-3">English</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Environmental studies</Dropdown.Item>
      </DropdownButton>
    
     </Col>
      
   

      <Col>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Select all activities"
      />
      </Col>


      <Col>
      <DropdownButton id="dropdown-basic-button" title="Duration">
      <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>
      
      </DropdownButton>
      </Col>


      {/* <Col>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      </Col> */}
      
      
      </Row>
      



      <Row>
       <Col>
       <Button variant="outline-info" className="mb-62">Show Chart</Button>{' '}
       </Col> 
      
    </Row>

    <Row>
    {/* <h3 className="mt-5">Bar chart</h3> */}
        <Col>
        
          <Chart></Chart>

        </Col>
    </Row>
  </Container>
        
  )
}

const Chart = () => {
  const [data] = useState({
    labels: ['Activity_1', 'Activity_2', 'Activity_3', 'Activity_4', 'Activity_5', 'Activity_6', 'Activity_7'],
    datasets: [
      {
        label: "Nimal's marks",
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [17, 15, 7, 15, 6, 20, 19],
      },
      {
        label: 'Highest marks',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [19, 18, 12, 15, 12, 20, 19],
      },
    ],
  });

  return (
    <CDBContainer>
      
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

