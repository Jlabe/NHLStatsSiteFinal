import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap';
import './style.css';
import {useContext, useState} from "react";
import {Context} from "react-intl/src/components/injectIntl";

const NavbarConst = () => {

    const [text, setText] = useState('');

    const handleEnterText = event => {
        setText(event.target.value);

        console.log('Last Name:', event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        var splitText = text.split(/(\s+)/);

        console.log(splitText)
        if (splitText[0] !== '' && splitText.length === 1){
            var url = "/SearchLanding/".concat(splitText[0]).concat("/").concat(splitText[0])
            window.location.href = url;
        }else if (splitText.length === 3){
            var url = "/SearchLanding/".concat(splitText[0]).concat("/").concat(splitText[1])
            window.location.href = url;
        }
    };

    return (
      <>
      <div className="background">
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">NHL Stats</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/TeamStats">Team Stats</Nav.Link>
      <Nav.Link href="/PlayerStats">Player Stats</Nav.Link>
      <Nav.Link href="/LeagueStats">League Stats</Nav.Link>
    </Nav>

    <Form className="d-flex">
        <FormControl
            onChange={handleEnterText}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary" onClick={handleClick}>Search</Button>
      </Form>
    </Container>
  </Navbar>
      </div>
  
</>
    );
  }

  
   
  export default NavbarConst;
