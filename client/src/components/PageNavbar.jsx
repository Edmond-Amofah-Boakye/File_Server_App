import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PageNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav-style' >
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/feeds">Feeds</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signin" className='signin-btn'>
                Sign in
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup" className='sign'>
                <button className = 'signup-btn'>Sign up</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;