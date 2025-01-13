import './Projects.css';
import Gradient from './../components/Gradient';
import link from './../assets/icons/link.svg';
import pill from './../assets/icons/pill.svg';
import brain from './../assets/icons/brain.svg';
import sound from './../assets/icons/sound.svg';
import stocks from './../assets/icons/stocks.svg';
import snp from './../assets/images/snp.png';
import github from './../assets/logos/github.svg';
import poster from './../assets/icons/poster.svg';
import slides from './../assets/icons/slides.svg';
import document from './../assets/icons/document.svg';

function Projects() {
    return (
        <div className='section' id='projects'>
            <h2>Projects</h2>

            <div className='vert'>

                <div id='stocks'>
                    <Gradient gradient={
                        `linear-gradient(#3c78d8, #3c78d8)`
                    }/>
                    <div className='vert project'>
                        <div className='hor'>
                            <img src={stocks} alt='Stocks Symbol' />
                            Nov 2024 — Dec 2024
                        </div>

                        <div className='glass panel'>
                            <h4>Correlation-Driven Feature Extraction for S&P 500 Prediction with Machine Learning</h4>
                        </div>

                        <span>
                            Extracted a suite of features for S&P 500 stock prediction, single-handedly increasing neural network performance by 17%.
                        </span>
                        <div className='links'>
                            <div className='hor'>
                                {/* <img id='link' src={link} alt='Link Symbol' /> */}
                                <a href='https://docs.google.com/presentation/d/19oBmw7dU6k7OxufPLGutSmjoAS_NSEhYLOFknppCA-U/edit?usp=sharing' target='blank' title='Slides'>
                                    <img src={slides} alt='Slides Symbol' />
                                </a>
                            </div>
                        </div>


                        {/* <div className='images'>
                            <img src={snp} alt='S&P Chart' />
                        </div> */}
                    </div>
                </div>


                <div id='speech-disfluencies'>
                    <Gradient gradient={
                        `linear-gradient(#3c78d8, #3c78d8)`
                    }/>
                    <div className='vert project'>
                        <div className='hor'>
                            <img src={sound} alt='Speech Symbol' />
                            Jan 2024 — Apr 2024
                        </div>

                        <div className='glass panel'>
                            <h4>Identifying Speech Disfluencies with Weakly Supervised Audio Transformers</h4>
                        </div>

                        
                        <span>
                            Trained deep audio transformers on Vanderbilt Developmental Stuttering Lab dataset to identify instances of stuttering in 
                            child speech.
                        </span>
                        <div className='links'>
                            <div className='hor'>
                                {/* <img id='link' src={link} alt='Link Symbol' /> */}
                                <a href='https://docs.google.com/document/d/1AM16Qcufp2CDrQ7Hu9Fd0Sxu-RxArqRE/edit?usp=sharing&ouid=109208091310666571454&rtpof=true&sd=true' target='blank' title='Proposal'>
                                    <img src={document} alt='Document Symbol' />
                                </a>

                                <a href='https://docs.google.com/presentation/d/1ym_tdhuEXcM3D7PPiYlFOMQvvP1Bjhp1bxjz7sdi4v0/edit?usp=sharing' target='blank' title='Slides'>
                                    <img src={slides} alt='Slides Symbol' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='surge'>
                    <Gradient gradient={
                        `linear-gradient(#3c78d8, #3c78d8)`
                    }/>
                    <div className='vert project'>
                        <div className='hor'>
                            <img src={pill} alt='Pill Symbol' />
                            Jun 2022 - Nov 2023
                        </div>

                        <div className='glass panel'>
                            <h4>SURGE: Sequential Reinforcement Graph Agents for Accelerated Therapeutic Design</h4>
                        </div>


                        <span>
                            Designed carbon chains and drug-like, synthetically accessible molecules with reinforcement learning (proximal policy optimization, 
                            imitation learning, custom molecular environment) and graph neural networks.
                        </span>
                        <div className='links'>
                            <div className='hor'>
                                {/* <img id='link' src={link} alt='Link Symbol' /> */}

                                <a href='https://github.com/MaxwellJChen/RL_Drug_Generation' target='blank' title='GitHub Repository'>
                                    <img src={github} alt='GitHub' />
                                </a>
                                
                                <a href='https://docs.google.com/presentation/d/1t4zp9FhjKXMU1bKOA7R_HRIAx7G7S4ZU2srLXNw2FrA/edit?usp=sharing' target='blank' title='Poster'>
                                    <img src={poster} alt='Poster Symbol' />
                                </a>
                                
                                <a href='https://docs.google.com/presentation/d/1olUNJCFUpsFnzMUJdOc2ipAIsVjbMunaQKxM8u9Sz0E/edit?usp=sharing' target='blank' title='Slides'>
                                    <img src={slides} alt='Slides Symbol' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='imagined-speech-decoding'>
                    <Gradient gradient={
                        `linear-gradient(#3c78d8, #3c78d8)`
                    }/>
                    <div className='vert project'>
                        <div className='hor'>
                            <img src={brain} alt='Brain Symbol' />
                            Sep 2021 - Mar 2022
                        </div>

                        <div className='glass panel'>
                            <h4>Novel Feature Extraction and Noise Removal Techniques for Imagined Speech Decoding</h4>
                        </div>


                        <span>
                            Classified which of 3 words subjects were thinking about based on their brainwaves, achieving state-of-the-art 
                            53.1% accuracy with novel feature extraction and noise reduction combination.
                        </span>

                        <div className='links'>
                            <div className='hor'>
                                {/* <img id='link' src={link} alt='Link Symbol' /> */}
                                <a href='https://docs.google.com/document/d/1akev5uc0mToU7PbgaWh9qRYgY3eeEqFochB3pevUsJQ/edit?usp=sharing' target='blank' title='Abstract'>
                                    <img src={document} alt='Document Symbol' />
                                </a>

                                <a href='https://drive.google.com/file/d/1wEBQFb1DBjf_zdExnNkXNtYeDLloo2om/view?usp=sharing' target='blank' title='Slides'>
                                    <img src={slides} alt='Slides Symbol' />
                                </a>

                                <a href='https://drive.google.com/file/d/1glPcHmMthblDJouHRGcb1hTq7Y2I9Rt-/view?usp=sharing' target='blank' title='Poster'>
                                    <img src={poster} alt='Poster Symbol' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;