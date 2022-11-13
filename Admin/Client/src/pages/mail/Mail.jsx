import "./mail.css";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Mail() {
  return (

    
  
    <container fluid className="mb-2">


      <Row>
      <Col>
    <h1 style={{ fontSize: "50px" }}>Send mail</h1>
    </Col>
    </Row>

    <Form className="mform">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="nimal@gmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="email" placeholder="Your subject here" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="info" className="button">Send</Button>{' '}
    </Form>
    </container>
    
   
  )
}
