import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
      return (
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                  <Nav.Item>
                        <NavLink className="btn btn-dark mx-1" to="/">Home</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                        <NavLink className="btn btn-dark mx-1" to="/upcoming">Upcoming</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                        <NavLink className="btn btn-dark mx-1" to="/popular">Popular</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                        <NavLink className="btn btn-dark mx-1" to="/search">Search</NavLink>
                  </Nav.Item>
            </Nav>
      );
}

export { NavBar };