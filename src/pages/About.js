
import './About.css';
import Gradient from './../components/Gradient';
import Slider from './../components/Slider';
import target from './../assets/icons/target.jpg';
import medal from './../assets/icons/medal.svg';
import northwestern from './../assets/logos/northwestern.svg';
import column from './../assets/icons/column.svg';
import diploma from './../assets/icons/diploma.svg';
import mortar from './../assets/icons/mortar-hat.svg';
import pencil from './../assets/icons/pencil.svg';


function About() {
    return (
        <div className='glass section' id='about'>
            <Gradient />

            <div className='container'>
                <h2>About</h2>
                <div className='vert'>
                    <div className='hor'>
                        <div className='glass panel'>
                            <h4 id='software-developer'>
                                <img src={target} alt='Target Symbol' />
                                Software Developer
                            </h4>
                        </div>

                        <Slider text={'with a focus on code efficiency, clarity, and scalability.'}/>
                    </div>

                    <div className='hor'>
                        <div className='glass panel'>
                            <h4>
                                <img src={medal} style={{'width': '50px', 'marginLeft': '-0.5vw', 'margin-right': '0.5vw'}} alt='Medal' />
                                Competitive Programmer
                            </h4>
                        </div>

                        <Slider text={'training for ICPC North American Championships.'}/>
                    </div>

                    <div className='hor'>
                        <div className='glass panel'>
                            <h4>
                                <img src={mortar} style={{'width': '40px'}} alt='Northwestern' />
                                Sophomore
                            </h4>
                        </div>

                        <Slider text={'pursuing combined Computer Science Master\'s and Bachelor\'s and Math Bachelor\'s.'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;