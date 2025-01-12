import './Navbar.css';
import Navbutton from './Navbutton';

function Navbar() {
    let pageHeight = document.documentElement.clientHeight;
    let labels = ['Home', 'About', 'Projects', 'Experience', 'Education'];
    let buttons = labels.map((label, index) => <Navbutton label={label} scrollto={{top: index * pageHeight, left: 0, behavior: 'smooth'}} key={index} />)
    return (
        <div className='navbar'>
            <div className='glass panel'>
                {buttons}
            </div>
        </div>
    )
}

export default Navbar;