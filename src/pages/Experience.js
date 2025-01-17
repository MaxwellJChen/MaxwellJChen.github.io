import './Experience.css';
import dsi from './../assets/logos/dsi.svg';
import vds from './../assets/logos/vds.jpeg';
import nexgen from './../assets/logos/nexgen.svg';
import kumon from './../assets/logos/kumon.svg';
import icpc from './../assets/logos/icpc.svg';

function Experience() {
    return (
        <div id='experience' className='section'>
            <div className='container'>
                <h1>Experience</h1>
                <div className='experience-wrapper hor'>
                    <div id='icpc' className='work glass'>
                        <div className='experience-label hor'>
                            <img src={icpc} alt={'ICPC Logo'} />
                            Sep 2024 - Jun 2027
                        </div>

                        <div className='experience-title glass panel hor'>
                            <h2>Championship Competitor</h2>
                        </div>
                        
                        <ul>
                            <li>International Collegiate Programming Contest</li>
                            <li>Member of 3-person ICPC team representing Northwestern and training for North American Championships</li>
                        </ul>
                    </div>

                    <div id='dsi' className='work glass'>
                        <div className='experience-label hor'>
                            <img src={dsi} alt={'DSI Seal'} />
                            Jan 2024 - Apr 2024
                        </div>

                        <div className='experience-title glass panel hor'>
                            <h2>Engineering Manager</h2>
                        </div>

                        <ul>
                            <li>Vanderbilt Data Science Institute</li>
                            <li>Managed a team of 6 (with master’s students and PhDs) for speech disfluency classification with agile framework</li>
                        </ul>
                    </div>

                    <div id='vds' className='work glass'>
                        <div className='experience-label hor'>
                            <img src={vds} alt={'Vanderbilt Data Science Club Logo'} />
                            Nov 2023 - May 2024
                        </div>

                        <div className='experience-title glass panel hor'>
                            <div className='hor'>
                                <h2>Engineering Manager & Lead Developer</h2>
                            </div>
                        </div>

                        <ul>
                            <li>Vanderbilt Data Science Club</li>
                            <li>Managed a team of 5 developers in partnership with ThriftSmart for inventory management with agile framework</li>
                        </ul>
                    </div>



                    <div id='nexgen' className='work glass'>
                        <div className='experience-label hor'>
                            <img src={nexgen} alt={'NexGen Coding Logo'} />
                            Jan 2022 — Oct 2022
                        </div>

                        <div className='experience-title glass panel hor'>
                            <h2>Course Author & Instructor</h2>
                        </div>

                        <ul>
                            <li>NexGen Coding</li>
                            <li>Wrote curricula for and taught AI Fundamentals and AI Intermediate classes</li>
                        </ul>
                    </div>

                    <div id='kumon' className='work glass'>
                        <div className='experience-label hor'>
                            <img src={kumon} alt={'Kumon Logo'} />
                            Aug 2021 - Apr 2022
                        </div>

                        <div className='experience-title glass panel hor'>
                            <h2>Instructor</h2>
                        </div>

                        <ul>
                            <li>Kumon Learning Center</li>
                            <li>Taught students in in-person, virtual, and Early Learner programs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;