import './Navbar.css';
import Navbutton from './Navbutton';

function Navbar() {
    const labels = ['Home', 'About', 'Projects', 'Experience', 'Education'];
    // const elements = ['#homepage', '#about', '#projects', '#experience', '#education']
    const heights = [0, 700, 1565, 3187, 4533];
    // let heights = elements.map((element, index) => window.scrollY + document.querySelector(element).getBoundingClientRect().top - 100);
    let buttons = labels.map((label, index) => <Navbutton label={label} scrollto={{top: heights[index], left: 0, behavior: 'smooth'}} key={index} />)
    return (
        <div className='navbar'>
            <div className='glass panel'>
                {buttons}
            </div>
        </div>
    )
}

export default Navbar;