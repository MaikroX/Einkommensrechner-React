import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/Amy-whiteOnBlue.png";

function NavHeader() {
  return (
    <div className="w-100">
      <Navbar bg="primary" expand="0" variant="dark" className="p-2">
        <img src={logo} alt="App Logo" style={{ width: "80px" }} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center text-uppercase">
            <Nav.Link
              href="#home"
              className="text-white d-flex justify-content-center"
            >
              <h4> Offene Stunden</h4>
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="text-white d-flex justify-content-center"
            >
              <h4 className=""> Archiv </h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavHeader;
