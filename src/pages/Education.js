import './Education.css';
import millburn from './../assets/millburn.png';
import vanderbilt from './../assets/vanderbilt.svg';
import northwestern from './../assets/northwestern.svg';

function Education() {
    return (
        <div className='education-container'>
            {/* <div className='education-top-gradient' /> */}
            <div className='education-panel'>
                <header>Education</header>
                <div className='carousel'>
                    <div className='panel'>
                        <tr>
                            <td><img src={millburn} alt={'Millburn High School Logo'} style={{'width': '50px'}}/></td>
                            <td>Millburn High School</td>
                            <td>Sep 2019 - Jun 2023</td>
                        </tr>
                        <ul>
                            <li>High School Degree with 4.42/4.0 GPA and 1590 SAT score</li>
                            <br />
                            <li>5s on 12 AP Tests: Calculus BC, Chemistry, English Literature & Composition, Macro & Microeconomics, 
                                Statistics, French, Physics 1 & 2, US History, Biology, Computer Science A</li>
                        </ul>
                    </div>

                    <div className='panel'>
                        <div className='panel-header'>
                            <tr>
                                <td><img src={vanderbilt} alt={'Vanderbilt University Seal'} style={{'width': '40px'}} /></td>
                                <td>Vanderbilt University</td>
                                <td>Aug 2023 - May 2024</td>
                            </tr>
                        </div>
                        <ul>
                            <li>Computer Science Bachelor's Degree with 4.0 GPA</li>
                            <br />
                            <li>Coursework: Program Design & Data Structures, Intermediate Software Design, 
                                Computer Architecture, Discrete Structures, Multivariable Calculus & Linear Algebra, Economic Statistics</li>
                        </ul>
                    </div>

                    <div className='panel'>
                        <div className='panel-header'>
                            <tr>
                                <td><img src={northwestern} alt={'Northwestern University Seal'} style={{'width': '40px'}} /></td>
                                <td>Northwestern University</td>
                                <td>Sep 2024 - Jun 2027</td>
                            </tr>

                            <ul>
                                <li>Accelerated Computer Science Master's Degree and Mathematics Bachelor's Degree with 4.0 GPA</li>
                                <br />
                                <li>
                                    Coursework: Programming Languages, Computer Systems, Operating Systems, 
                                    Microcontroller Systems, Design & Analysis of Algorithm, Machine Learning, 
                                    Game Design & Development, Optimization, Public Speaking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='education-bottom-gradient'></div> */}
        </div>
    );
}

export default Education;