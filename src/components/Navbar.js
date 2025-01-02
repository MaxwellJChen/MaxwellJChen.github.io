import './Navbar.css';
import Navbutton from './Navbutton';

function Navbar() {
    return (
        <div className='navbar-container'>
            <Navbutton label={'Home'} />
            <Navbutton label={'Projects'} />
            <Navbutton label={'Experience'} />
            <Navbutton label={'Education'} />
        </div>
    )
}

export default Navbar;