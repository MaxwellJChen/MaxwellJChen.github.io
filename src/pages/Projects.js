import './Projects.css';
import Gradient from './../components/Gradient';
import link from './../assets/icons/link.svg';
import pill from './../assets/icons/pill.svg';
import brain from './../assets/icons/brain.svg';
import sound from './../assets/icons/sound.svg';
import stock from './../assets/icons/stock.svg';

function Projects() {
    return (
        <div className='glass section' id='projects'>
            <Gradient gradient={
                `radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, hsla(189,100%,56%,1) 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, hsla(189,100%,56%,1) 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, hsla(189,100%,56%,1) 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, hsla(189,100%,56%,1) 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, hsla(189,100%,56%,1) 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, hsla(189,100%,56%,1) 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, hsla(189,100%,56%,1) 50%)`
            } />

            <div className='container'>
            <h2>Projects</h2>

            <div className='vert'>
                <div className='glass panel'>
                    <div className='hor'>
                        <div>
                            <img src={stock} style={{'width': '30px', 'marginRight': '0.4vw'}} alt='Stocks Symbol' />
                            Correlation-Driven Feature Extraction for S&P 500 Prediction with Machine Learning
                        </div>
                        Nov 2024 — Dec 2024
                    </div>

                    <ul>
                        <li>
                            <img src={link} style={{'width': '30px'}} alt='Link Symbol' />
                            <a href='https://docs.google.com/presentation/d/19oBmw7dU6k7OxufPLGutSmjoAS_NSEhYLOFknppCA-U/edit?usp=sharing' target='blank'>Slides</a>
                        </li>
                        <li>
                            Predicted whether S&P 500 closing prices would increase or decrease based on prior S&P 500 data in team of 5 and 
                            single-handedly extracted features for training resulting in 17% neural network accuracy improvement from 56% to 73%
                        </li>
                    </ul>
                </div>

                <div className='glass panel'>
                    <div className='hor'>
                        <div>
                            <img src={sound} style={{'width': '30px', 'marginRight': '0.5vw'}} alt='Sound Symbol' />
                            Identifying Speech Disfluencies with Weakly Supervised Audio Transformers
                        </div>
                        Jan 2024 — Apr 2024
                    </div>

                    <ul>
                        <li>
                            <img src={link} style={{'width': '30px'}} alt='Link Symbol' />
                            <a href='https://docs.google.com/document/d/1AM16Qcufp2CDrQ7Hu9Fd0Sxu-RxArqRE/edit?usp=sharing&ouid=109208091310666571454&rtpof=true&sd=true' target='blank'>Proposal</a>, <a href='https://docs.google.com/presentation/d/1ym_tdhuEXcM3D7PPiYlFOMQvvP1Bjhp1bxjz7sdi4v0/edit?usp=sharing' target='blank'>Presentation</a>
                        </li>
                        <li>
                            ASHA (premier speech-language conference) proposal accepted for training audio transformers to 
                            identify children who stutter and label speech disfluencies with custom dataset from Developmental 
                            Stuttering Lab
                        </li>
                    </ul>
                </div>

                <div className='glass panel'>
                    <div className='hor'>
                        <div>
                            <img src={pill} style={{'width': '30px', 'marginRight': '0.5vw'}} alt='Pill Symbol' />
                            SURGE: Sequential Reinforcement Graph Agents for Accelerated Therapeutic Design
                        </div>
                        Jun 2022 - Apr 2024
                    </div>

                    <ul>
                        <li>
                            <img src={link} style={{'width': '30px'}} alt='Link Symbol' />
                            <a href='https://github.com/MaxwellJChen/RL_Drug_Generation' target='blank'>GitHub</a>, <a href='https://docs.google.com/presentation/d/1t4zp9FhjKXMU1bKOA7R_HRIAx7G7S4ZU2srLXNw2FrA/edit?usp=sharing' target='blank'>Poster</a>, <a href='https://docs.google.com/presentation/d/1olUNJCFUpsFnzMUJdOc2ipAIsVjbMunaQKxM8u9Sz0E/edit?usp=sharing' target='blank'>Presentation</a>
                        </li>
                        <li>
                            Designed carbon chains and drug-like, synthetically accessible molecules with reinforcement learning 
                            (proximal policy optimization, imitation learning, custom molecular environment) and graph neural networks
                        </li>
                    </ul>
                </div>

                <div className='glass panel'>
                    <div className='hor'>
                        <div>
                            <img src={brain} style={{'width': '30px', 'margin': '0 0.6vw 0 0'}} alt='Brain Symbol' />
                            Novel Feature Extraction and Noise Removal Techniques for Imagined Speech Decoding
                        </div>
                        Sep 2021 - Mar 2022
                    </div>

                    <ul>
                        <li>
                            <img src={link} style={{'width': '30px'}} alt='Link Symbol' />
                            <a href='https://docs.google.com/document/d/1akev5uc0mToU7PbgaWh9qRYgY3eeEqFochB3pevUsJQ/edit?usp=sharing' target='blank'>Abstract</a>, <a href='https://drive.google.com/file/d/1wEBQFb1DBjf_zdExnNkXNtYeDLloo2om/view?usp=sharing' target='blank'>Slides</a>, <a href='https://drive.google.com/file/d/1glPcHmMthblDJouHRGcb1hTq7Y2I9Rt-/view?usp=sharing' target='blank'>Poster</a>
                        </li>
                        <li>
                            Classified which of 3 words subjects were thinking of based on EEG brainwaves with deep ANNs, achieving SOTA 53.1% accuracy with novel feature extraction and noise reduction combination
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;