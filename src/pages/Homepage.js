import './Homepage.css';
import github from './../assets/logos/github.svg';
import gmail from './../assets/logos/gmail.svg';
import linkedin from './../assets/logos/linkedin.svg';
import leetcode from './../assets/logos/leetcode.svg';
import codeforces from './../assets/logos/codeforces.svg';
import chess from './../assets/logos/chess.svg';
import document from './../assets/icons/document.svg';

function Homepage() {

    return (
        <div className='page' id='homepage'>
            <div className='centered'>
                <span id='homepage-title'>Maxwell J. Chen</span>
                <span id='homepage-sub-title'>Developer Portfolio</span>
                <div id='logos'>
                    <a href={'https://github.com/MaxwellJChen'} target={'blank'}>
                        <img id='github' src={github} title='GitHub' alt='GitHub Profile' />
                    </a>

                    <a href={'https://codeforces.com/profile/Polaris1000M'} target={'blank'}>
                        <img id='codeforces' src={codeforces} title='CodeForces' alt='CodeForces Profile' />
                    </a>

                    <a href={'https://leetcode.com/u/MaxwellJChen/'} target={'blank'}>
                        <img id='leetcode' src={leetcode} title='LeetCode' alt='LeetCode Profile' />
                    </a>

                    <a href={'mailto:maxwelljchen1@gmail.com'} target={'blank'}>
                        <img id='gmail' src={gmail} title='Email' alt='Email' />
                    </a>

                    <a href={'https://www.linkedin.com/in/maxwell-chen-001a9031b/'} target={'blank'}>
                        <img id='linkedin' src={linkedin} title='LinkedIn' alt='LinkedIn Profile' />
                    </a>

                    <a href={'https://www.chess.com/member/polaris1000m'} target={'blank'}>
                        <img id='chess' src={chess} title='Chess' alt='Chess.com Profile' />
                    </a>

                    <a href={'/resume.pdf'} target={'blank'}>
                        <img id='document' src={document} title='Resume' alt='Resume' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Homepage;