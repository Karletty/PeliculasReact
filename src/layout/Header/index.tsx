import { NavBar } from '../NavBar';
import './styles.scss';

const Header = () => {
      return (
            <header>
                  <div className="brand">
                        <img src="./logo.png" alt="logo" className='logo' />
                        <h1>K-Movies</h1>
                  </div>
                  <NavBar />
            </header>
      );
}

export { Header };