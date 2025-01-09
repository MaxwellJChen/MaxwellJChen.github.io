import './Homepage.css';
import github from './../assets/logos/github.svg';
import email from './../assets/icons/email.svg';
import linkedin from './../assets/logos/linkedin.svg';
import leetcode from './../assets/logos/leetcode.svg';
import codeforces from './../assets/logos/codeforces.svg';
import chess from './../assets/logos/chess.svg';
import document from './../assets/icons/document.svg';

function Homepage() {
    return (
        <div className='page'>
            <div className='container'>
                <span style={{'fontSize': '90px', 'width': '100vw', 'textAlign': 'center'}}>Maxwell J. Chen</span>
                <div className='logos'>
                    <a href={'https://github.com/MaxwellJChen'} target={'blank'}><img src={github} title='GitHub' alt='GitHub Profile' /></a>
                    <a href={'https://www.linkedin.com/in/maxwell-chen-001a9031b/'} target={'blank'}><img src={linkedin} title='LinkedIn' alt='LinkedIn Profile' /></a>
                    <a href={'https://codeforces.com/profile/Polaris1000M'} target={'blank'}><img src={codeforces} title='CodeForces' alt='CodeForces Profile' /></a>
                    <a href={'https://leetcode.com/u/MaxwellJChen/'} target={'blank'}><img src={leetcode} title='LeetCode' alt='LeetCode Profile' /></a>
                    <a href={'https://www.chess.com/member/polaris1000m'} target={'blank'}><img src={chess} title='Chess' alt='Chess.com Profile' style={{'height':'6vh', 'width':'6vh'}}/></a>
                    <a href={'mailto:maxwelljchen1@gmail.com'} target={'blank'}><img src={email} title='Email' alt='Email' /></a>
                    <a href={'/resume.pdf'} target={'blank'}><img src={document} title='Resume' alt='Resume' /></a>
                </div>
                <span style={{'fontSize': '36px'}}>Developer Portfolio</span>
            </div>
        </div>
    )
}

export default Homepage;