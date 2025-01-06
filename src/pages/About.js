
import './About.css';
import github from './../assets/icons/github.svg';
import email from './../assets/icons/email.svg';
import linkedin from './../assets/icons/linkedin.svg';

function About() {
    return (
        <>
            <div className='section-panel'>
                <header>About</header>
                <div className='logos'>
                    <a href={'https://github.com/MaxwellJChen'} target={'blank'}><img src={github} /></a>
                    <a href={'mailto:maxwelljchen1@gmail.com'} target={'blank'}><img src={email} /></a>
                    <a href={'https://www.linkedin.com/in/maxwell-chen-001a9031b/'} target={'blank'}><img src={linkedin} /></a>
                </div>
                <div className='section-text'>
                    <div><big>Software developer</big> focused on code efficiency and clarity.</div>
                    <div><big>Competitive programmer</big> training for ICPC North American Championships.</div>
                    <div><big>Student</big> pursuing an accelerated Computer Science Master's Degree and Mathematics Bachelor's Degree at Northwestern.</div>
                </div>
                
            </div>
        </>
    );
}

export default About;