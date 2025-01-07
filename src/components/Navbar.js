import './Navbar.css';
import Navbutton from './Navbutton';

function Navbar() {
    return (
        <div className='navbar-container'>
            <Navbutton label={'Home'} scrollto={{top: 0, left: 0, behavior: 'smooth'}} />
            <Navbutton label={'About'} scrollto={{top: document.documentElement.clientHeight, left: 0, behavior: 'smooth'}} />
            <Navbutton label={'Projects'} scrollto={{top: 0, left: 0, behavior: 'smooth'}} />
            <Navbutton label={'Experience'} scrollto={{top: 0, left: 0, behavior: 'smooth'}} />
            <Navbutton label={'Education'} scrollto={{top: document.documentElement.clientHeight * 2, left: 0, behavior: 'smooth'}} />
        </div>
    )
}

export default Navbar;