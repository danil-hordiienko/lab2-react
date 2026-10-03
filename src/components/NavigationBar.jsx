import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">Lab 2</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="me-auto">
            {/* Router links change the page without reloading the app. */}
            <Nav.Link as={NavLink} to="/" end eventKey="home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/read" eventKey="read">Read</Nav.Link>
            <Nav.Link as={NavLink} to="/create" eventKey="create">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
