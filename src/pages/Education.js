import './Education.css';
import millburn from './../assets/millburn.png';
import vanderbilt from './../assets/vanderbilt.svg';
import northwestern from './../assets/northwestern.svg';

function Education() {
    return (
        <div className='education-panel'>
            <header>Education</header>
            <div className='carousel'>
                <div className='panel'>
                    <tr>
                        <td><img src={millburn} alt={'Millburn High School Logo'} style={{'width': '60px'}}/></td>
                        <td>Millburn High School</td>
                        <td>Sep 2019 - Jun 2023</td>
                    </tr>

                    <ul>
                        <li>4.0 GPA</li>
                    </ul>
                </div>

                <div className='panel'>
                    <div className='panel-header'>
                        <tr>
                            <td><img src={vanderbilt} alt={'Vanderbilt University Seal'} /></td>
                            <td>Vanderbilt University</td>
                            <td>Aug 2023 - May 2024</td>
                        </tr>
                    </div>
                </div>

                <div className='panel'>
                    <div className='panel-header'>
                        <tr>
                            <td><img src={northwestern} alt={'Northwestern University Seal'} /></td>
                            <td>Northwestern University</td>
                            <td>Sep 2024 - Jun 2027</td>
                        </tr>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;