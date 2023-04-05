
import "./navbar.css";
import CardWidget from "../CardWidget";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
    return (
      <Navbar className="header"  expand="sm" sticky="top">
        <Container>
          <Navbar.Brand href="/" to={"/"}><img className="icon" src="../public/logo.webp" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><NavLink to={"/"}>Inicio</NavLink></Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2"><NavLink to={"/category/fantasia"}>Fantasia</NavLink></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><NavLink to={"/category/cuento"}>Cuentos</NavLink></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><NavLink to={"/category/novela"}>Novelas</NavLink></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5"><NavLink to={"/category/thriller"}>Thriller</NavLink></NavDropdown.Item>
               </NavDropdown>
               <Nav.Link href="#card"><NavLink to={"/card"}>Card</NavLink></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
          <CardWidget />
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;














/*
function NavBar({changeValue}){
    return <div>
        <header className=" d-flex justify-content-center"  >
        <img className="icon" src="https://www.shutterstock.com/image-vector/coffee-book-logo-design-cup-260nw-1711719175.jpg" />

            <nav className="navbar navbar-expand-sm navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="opciones">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" ><NavLink to={"/"}>INICIO</NavLink></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" ><NavLink to={"/category/novela"}>Novelas</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" ><NavLink to={"/category/fantasia"}>Fantasia</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" ><NavLink to={"/category/cuento"}>Cuentos</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" ><NavLink to={"/category/thriller"}>Thriller</NavLink></a>
                        </li>
                    </ul>
                    <CardWidget />
                </div>
            </nav>
        </header>
</div>;

}

export default NavBar
*/