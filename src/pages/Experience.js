import './Experience.css';
import vanderbilt from './../assets/logos/vanderbilt.svg';
import vds from './../assets/logos/vds.jpeg';
import nexgen from './../assets/logos/nexgen.jpeg';
import kumon from './../assets/logos/kumon.svg';

function Experience() {
    return (
        <div className='experience page'>
            <div className='container'>
                <header>Experience</header>

                <div className='vert'>
                    <div className='panel'>
                        <div className='hor label'>
                            <div>
                                <img src={vanderbilt} style={{'width': '30px', 'marginRight': '0.4vw'}} alt='Vanderbilt University Logo' />
                                Vanderbilt Data Science Institute Engineering Manager
                            </div>
                            Jan 2024 - Apr 2024
                        </div>
                        <ul>
                            <li>
                                Managed a team of 6 (with master’s students and PhDs) for speech disfluency classification with agile framework
                            </li>
                        </ul>
                    </div>

                    <div className='panel'>
                        <div className='hor label'>
                            <div>
                                <img src={vds} style={{'width': '30px', 'marginRight': '0.4vw'}} alt='Vanderbilt Data Science Logo' />
                                Vanderbilt Data Science Club Engineering Manager & Lead Developer
                            </div>
                            Nov 2023 - May 2024
                        </div>
                        <ul>
                            <li>
                                Managed a team of 5 developers in partnership with ThriftSmart for inventory management with agile framework
                            </li>
                        </ul>
                    </div>

                    <div className='panel'>
                        <div className='hor label'>
                            <div>
                                <img src={nexgen} style={{'width': '35px', 'marginLeft': '-0.2vw', 'marginRight': '0.4vw', 'transform': 'translateY(-5%)'}} alt='NexGen Coding Logo' />
                                NexGen Coding Principal AI Course Author & Instructor
                            </div>
                            Jan 2022 — Oct 2022
                        </div>
                        <ul>
                            <li>
                                Wrote curricula for and taught AI Fundamentals and AI Intermediate classes at NexGen Coding non-profit
                            </li>
                        </ul>
                    </div>

                    <div className='panel'>
                        <div className='hor label'>
                            <div>
                                <img src={kumon} style={{'width': '27px', 'marginRight': '0.4vw'}} alt='Kumon Logo' />
                                Kumon Instructor
                            </div>
                            Aug 2021 - Apr 2022
                        </div>
                        <ul>
                            <li>
                                Taught students in in-person, virtual, and Early Learner programs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;