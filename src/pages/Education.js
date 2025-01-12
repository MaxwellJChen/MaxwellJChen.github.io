import './Education.css';
import millburn from './../assets/logos/millburn.png';
import vanderbilt from './../assets/logos/vanderbilt.svg';
import northwestern from './../assets/logos/northwestern.svg';

function Education() {
    return (
        <div className='education page'>
            <div className='container'>
                <h1>Education</h1>
                <div className='vert'>

                    <div className='glass'>
                        <div className='hor label'>
                            <div>
                                <img src={northwestern} alt={'Northwestern University Seal'} style={{'width': '40px'}} />
                                Northwestern University
                            </div>
                            Sep 2024 - Jun 2027
                        </div>

                        <ul>
                            <li>Accelerated Computer Science Master's Degree and Mathematics Bachelor's Degree with 4.0 GPA</li>
                            <li>
                                Coursework: Programming Languages, Computer Systems, Operating Systems, 
                                Microcontroller Systems, Design & Analysis of Algorithm, Machine Learning, 
                                Game Design & Development, Optimization, Public Speaking
                            </li>
                        </ul>
                    </div>

                    <div className='glass'>
                        <div className='hor label'>
                            <div>
                                <img src={vanderbilt} alt={'Vanderbilt University Seal'} style={{'width': '40px'}} />
                                Vanderbilt University
                            </div>
                            Aug 2023 - May 2024
                        </div>
                        <ul>
                            <li>Computer Science Bachelor's Degree with 4.0 GPA</li>
                            <li>Coursework: Program Design & Data Structures, Intermediate Software Design, 
                                Computer Architecture, Discrete Structures, Multivariable Calculus & Linear Algebra, Economic Statistics</li>
                        </ul>
                    </div>

                    <div className='glass'>
                        <div className='hor label'>
                            <div>
                                <img src={millburn} alt={'Millburn High School Logo'} style={{'width': '50px'}}/>
                                Millburn High School
                            </div>
                            <div>Sep 2019 - Jun 2023</div>
                        </div>
                        <ul>
                            <li>High School Degree with 4.42/4.0 GPA and 1590 SAT score</li>
                            <li>5s on 12 AP Tests: Calculus BC, Chemistry, English Literature & Composition, Macro & Microeconomics, 
                                Statistics, French, Physics 1 & 2, US History, Biology, Computer Science A</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Education;