import Logo from "../assets/img/Logo"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../assets/styles/Login.css";
import { loadingImages } from "../components/loadingImages.model"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BgApp = styled.div`
  background: url(${loadingImages[Math.floor(Math.random() * (loadingImages.length))]}) no-repeat center center fixed;
  background-size: cover !important;
  
`

const Login = () => {
  return (
    <BgApp className="App">
      <div className="header"></div>
      <Card className="card-style">
        <Card.Body className="body-style">
          <Logo className="image" />
          <Card.Subtitle className="mb-3 text-muted">Waldbrandprävention</Card.Subtitle>
          <Card.Title>Anmelden</Card.Title>
          <Card.Text className="text-style">

          </Card.Text >
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label-style">Email Adresse</Form.Label>
              <Form.Control type="email" placeholder="Email Adresse" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label-style">Passwort</Form.Label>
              <Form.Control type="password" placeholder="Passwort" />
              <Form.Label className="text-secondary" as={Link} to="/forgot-password" >Passwort vergessen</Form.Label>
            </Form.Group>

            <Button variant="primary" type="submit">
              Anmelden
            </Button>
          </Form>
          <Card.Text className="text-style">
            
            <Card.Link as={Link} to="/registrieren" >Registrieren</Card.Link>
          </Card.Text>

        </Card.Body>
      </Card>
    </BgApp >
  );
}

export default Login;