
import './About.css';
import Gradient from './../components/Gradient';
import Slider from './../components/Slider';
import target from './../assets/icons/target.svg';
import medal from './../assets/icons/medal.svg';
import northwestern from './../assets/logos/northwestern.svg';
import column from './../assets/icons/column.svg';
import diploma from './../assets/icons/diploma.svg';
import mortar from './../assets/icons/mortar-hat.svg';
import pencil from './../assets/icons/pencil.svg';


function About() {
    return (
        <div className='glass section' id='about'>
            <Gradient gradient={
                'linear-gradient(to right top, #d93c3c, #e22660, #df1f87, #cd34b0, #a74fd7, #8071ef, #508afc, #009fff, #00baff, #00cde4, #00d995, #23dd1e)'
            } rotate={false} />

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

                        <Slider text={'pursuing combined Computer Science Master\'s and Bachelor\'s and Math Bachelor\'s.'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;