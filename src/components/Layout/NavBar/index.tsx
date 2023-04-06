import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './styles.scss'

const NavBar = () => {
      return (
            <Navbar variant="dark">
                  <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">
                              Home
                        </NavLink>
                        <NavLink className='nav-link' to="/popular">
                              Popular
                        </NavLink>
                        <NavLink className='nav-link' to="/upcoming">
                              Upcoming
                        </NavLink>
                        <NavLink className='nav-link' to="/search">
                              Search
                        </NavLink>
                  </Nav>
            </Navbar>
      );
}

export { NavBar }