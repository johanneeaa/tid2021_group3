import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AppContext } from "./AppProvider";
import './Styling/NavigationBar.css';

export function NavigationBar() {

    //useContext to get theme from URL slug
    const {getTheme} = useContext(AppContext)

    return (
     
        <Navbar style = {{background:getTheme().primary}} className = "navbar">
            <Container href="container">
              <Navbar.Brand href = "Rental" className = "logo">ScanCar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link className="rentallink" href="Rental">Rental</Nav.Link>
                            <Nav.Link className="carslink" href="Cars">Cars</Nav.Link>
                            <Nav.Link className="transferlink" href="Transfers">Transfers</Nav.Link>
                            <Nav.Link className="customerslink" href = "Customer">Customer</Nav.Link>
                            <Nav.Link className="statisticslink" href="Statistics">Statistics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );

}