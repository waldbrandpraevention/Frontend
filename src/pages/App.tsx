import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../assets/img/logo.svg'
import "../assets/styles/App.css"
import Panel from '../components/Panel';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={8}><Panel>foo</Panel></Col>
          <Col sm={4}><Panel>foo</Panel></Col>
        </Row>
        <Row>
          <Col sm><Panel>foo</Panel></Col>
          <Col sm><Panel>foo</Panel></Col>
          <Col sm><Panel>foo</Panel></Col>
        </Row>
       {/*  <Panel>foo</Panel>
        <Panel visible={false}>unsichtbar</Panel>
        <Panel visible>bar</Panel> */}
      </Container>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>



    </div>
  );
}

export default App;
