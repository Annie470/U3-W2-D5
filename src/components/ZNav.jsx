import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const ZNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img id="logo" className="fly" src="/TTPLogo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-end">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="d-none d-lg-block title fs-2 fw-bold">
              The Forecast Oracle
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Link to="/"><p>Home</p></Link> */}
            {/* bello as no? così evita obbrobbri */}
            <Nav.Link className="text fs-2" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text fs-2" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              className="text fs-2"
              as={Link}
              to="https://github.com/Annie470">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZNav;
