import React from "react";
import "./topbar.css";
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import logo from './logo192.png'
// import Logo from '/topbar/ogo.jpg';


// import { NotificationsNone, Language, Settings } from "@material-ui/icons";

console.log(window.location.origin)
export default function Topbar() {
  return (

    <Container fluid className="mb-2" >

    <Row>
      <Col>

      <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      
      </Col>
    </Row>

    <Row>
      <Col >
      
      <div className="d-flex flex-row"> 
      
      <img alt="" className="logo mr-2 "/>
         
    
         <h3 className="pl-2 pt-4 text">Admin Siphala</h3>
      </div>
           
         
    </Col>
    <Col className='d-flex justify-content-end'>
        

        {/* <Button variant="danger">Go to Siphala</Button>{' '} */}

        {/* <Button className='ml-2' variant="Danger" size="sm" active>
           Go to Siphala
         </Button>{' '} */}

        <div >
            <Button href="http://localhost:3000/" variant="danger" className="btn btn-succes mr-2 btn-lg btn-block"   size="btn-lg btn-block" active>
                Go to Siphala
            </Button>
        </div>


        <div className="ml-2" >
        <Button href="http://localhost:3000/admin-login" variant="dark" className="btn btn-succes mr-2 text-center btn-lg btn-block"   size="btn-lg btn-block" active>
           Log out
         </Button>
        </div>
        
         
    </Col>
    </Row>  
  </Container>
 

        


       
       
   



  

         


    
  );
} 


