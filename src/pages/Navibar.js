import { Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../components/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navibar =() => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
  
  <Navbar.Brand href="/" >
    <img 
    src={logo} 
    width="90" 
    height="60" 
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <Nav.Link href="/onthemenu">ON THE MENU</Nav.Link>
      <Nav.Link href="/favorite">FAVORITE</Nav.Link>
      <Nav.Link href="/cart">CART</Nav.Link>
      <Nav.Link href="/contactus">CONTACT US</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">LOGIN</Nav.Link>
      <Nav.Link href="/signup" className="signupbutton">SIGNUP</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>

    );
  }
  
  export default Navibar;