
import './About.css';
import Gradient from './../components/Gradient';
import Slider from './../components/Slider';
import target from './../assets/icons/target.svg';
import medal from './../assets/icons/medal.svg';
import mortar from './../assets/icons/mortar-hat.svg';


function About() {
    return (
        <div className='section' id='about'>
            {/* <Gradient /> */}
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
                                <img src={medal} alt='Medal' />
                                Competitive Programmer
                            </h4>
                        </div>

                        <Slider text={'training for ICPC North American Championships.'}/>
                    </div>

                    <div className='hor'>
                        <div className='glass panel'>
                            <h4>
                                <img src={mortar} alt='Northwestern' />
                                Sophomore
                            </h4>
                        </div>

                        <Slider text={'pursuing combined Computer Science Master\'s and Bachelor\'s and Mathematics Bachelor\'s at Northwestern.'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;