import './Navbutton.css';

function Navbutton({ label }) {
    let callback = () => {
        console.log('clicked');
        window.scrollTo(0, 50);
    };

    return (
        <button className='navbar-button' onClick={callback}>
            {label}
        </button>
    )
}

export default Navbutton;