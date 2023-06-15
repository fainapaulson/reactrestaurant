import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{height:'50px',
            width:'50px'}}
              alt=""
              src="https://i.postimg.cc/RhG9cPRB/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
         BEST RESTO
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header