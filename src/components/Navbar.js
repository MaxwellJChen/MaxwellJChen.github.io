import './Navbar.css';
import Navbutton from './Navbutton';

function Navbar() {
    const labels = ['Home', 'About', 'Projects', 'In Progress'];
    // const elements = ['#homepage', '#about', '#projects', '#homepage']
    const heights = [0, document.documentElement.clientHeight, 1564, 100000000];
    // let heights = elements.map((element, index) => window.scrollY + document.querySelector(element).getBoundingClientRect().top - 60);
    console.log(heights);
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