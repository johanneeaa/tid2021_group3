import { Navbar, Container, Nav } from "react-bootstrap";
import './NavigationBar.css'

export function NavigationBar() {
    return (
     
        <Navbar className = "navbar">
            <Container href="container">
              <Navbar.Brand href = "home" className = "logo">ScanCar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link className="rentallink" href="Rental">Rental</Nav.Link>
                            <Nav.Link className="carslink" href="Cars">Cars</Nav.Link>
                            <Nav.Link className="customerslink" href = "Customers">Customers</Nav.Link>
                            <Nav.Link className="statisticslink" href="Statistics">Statistics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );

}