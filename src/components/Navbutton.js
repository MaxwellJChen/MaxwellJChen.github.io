import './Navbutton.css';

function Navbutton({ label, scrollto }) {
    let callback = () => {
        console.log('clicked');
        window.scrollTo(scrollto);
    };

    return (
        <button className='navbutton' onClick={callback}>
            {label}
        </button>
    )
}

export default Navbutton;