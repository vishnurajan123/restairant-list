import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    // <div>Header compoent</div>
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand><Link className='fw-bolder text-light' 
      to={'/'} style={{textDecoration:'none'}}>Resto Cafe
      </Link></Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
