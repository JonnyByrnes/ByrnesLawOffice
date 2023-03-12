import {React} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import BLOlogo from '../photos/BLOlogo.jpeg';

function NavBar(props) {    

    return (
            
        <>
            <div className="navbar">
            <Navbar bg="white" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/">
                            <img
                                alt="ByrnesLawOffice Logo"
                                src={BLOlogo}
                                width="150"
                                height="54"
                                className="d-inline-block align-top"
                            />

                        </Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link as={Link} to="/"><strong>Home</strong></Nav.Link>
                        
                        <Nav.Link as={Link} to="/about"><strong>About</strong></Nav.Link>
                        <Nav.Link as={Link} to="/contact"><strong>Contact Us</strong></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            </div>
            <br/>
            <div className="body-spacer">
                <Outlet />
            </div>
        </>
    );
}
export default NavBar;