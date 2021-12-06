import { Navbar, Container, Nav } from "react-bootstrap";

export function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">ScanCar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="Rental">Rental</Nav.Link>
                        <Nav.Link href="Cars">Cars</Nav.Link>
                        <Nav.Link href="Transfers">Transfers</Nav.Link>
                        <Nav.Link href="Statistics">Statistics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}