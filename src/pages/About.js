
import './About.css';
import target from './../assets/icons/target.svg';
import icpc from './../assets/logos/icpc.png';
import northwestern from './../assets/logos/northwestern.svg';


function About() {
    return (
        <div className='about page'>
            <div className='container'>
                <header>About</header>
                <div className='vert'>
                    
                    <div className='panel'>
                        <img src={target} style={{'width': '27px', 'marginRight': '0.6vw'}} alt='Target Symbol' />
                        Software Developer focused on code efficiency and clarity.
                    </div>

                    <div className='panel'>
                        <img src={icpc} style={{'width': '40px', 'marginRight': '0.6vw'}} alt='Icpc Logo' />
                        Competitive Programmer training for ICPC North American Championships.
                    </div>
                    <div className='panel'>
                        <img src={northwestern} style={{'width': '30px', 'marginRight': '0.6vw'}} alt='Northwestern Seal' />
                        Sophomore pursuing accelerated Computer Science Master's and Mathematics Bachelor's degrees.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;