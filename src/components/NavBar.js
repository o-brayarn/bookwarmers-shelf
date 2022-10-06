import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

export default function NavBar() {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="brand" href="/">BOOKWARMER'S SHELF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>

          <Nav className="navlink">
          <NavLink to="/" exact="true"> HOME </NavLink>
              <NavLink to="/reading-list" exact="true"> READING LIST </NavLink>
              <NavLink to="/read" exact="true"> READ </NavLink>
              <NavLink to="/add-books" exact="true"><Button variant="outline-info">+ADD</Button></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
