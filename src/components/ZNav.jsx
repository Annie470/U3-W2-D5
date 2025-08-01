import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";

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
              as={NavLink}
              to="/"
              className="d-none d-lg-block title fs-2 fw-bold">
              The Forecast Oracle
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Link to="/"><p>Home</p></Link> */}
            {/* bello as no? così evita obbrobbri, in teoria NavLin dovrebbe gestire la classe active senza usare location, ma text credo la sovrascriva*/}
            {/* {<Nav.Link className={"text fs-2" + (location.pathname === '/' ? ' active' : '')} as={Link} to="/"></Nav.Link>}  IMPORTANDO OVVIAMENTE LINK AL POSTO DI NAVLINK E USELOCATION*/}
            <Nav.Link className="text fs-2" as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text fs-2" as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              className="text fs-2"
              as="a"
              href="https://github.com/Annie470/U3-W2-D5"
              target="_blank">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZNav;
