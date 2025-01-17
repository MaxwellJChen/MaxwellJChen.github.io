
import './About.css';
import Slider from './../components/Slider';
import keyboard from './../assets/icons/keyboard.svg';
import algorithm from './../assets/icons/algorithm.svg';
import college from './../assets/icons/college.svg';


function About() {
    return (
        <div className='section' id='about'>
            <div className='container'>
                <h1>About</h1>
                <div className='vert'>
                    <div className='hor'>
                        <div className='glass panel hor'>
                            <img src={keyboard} alt='Keyboard Symbol' />
                            <h2 id='software-developer'>
                                Software Developer
                            </h2>
                        </div>

                        <Slider content={'with a focus on code efficiency, clarity, and scalability.'}/>
                    </div>

                    <div className='hor'>
                        <div className='glass panel hor'>
                            <img src={algorithm} alt='Algorithm Symbol' />
                            <h2 id='competitive-programmer'>
                                Competitive Programmer
                            </h2>
                        </div>

                        <Slider content={'training for ICPC North American Championships.'}/>
                    </div>

                    <div className='hor'>
                        <div className='glass panel hor'>
                            <img src={college} alt='Studying Symbol' />
                            <h2 id='student'>
                                Student
                            </h2>
                        </div>

                        <Slider content={'pursuing combined Computer Science BS/MS program with Mathematics BA at Northwestern.'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;