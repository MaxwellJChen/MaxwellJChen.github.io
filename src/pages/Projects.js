import './Projects.css';
import pill from './../assets/icons/pill.svg';
import brain from './../assets/icons/brain.svg';
import sound from './../assets/icons/sound.svg';
import stocks from './../assets/icons/stocks.svg';
import github from './../assets/logos/github.svg';
import poster from './../assets/icons/poster.svg';
import slides from './../assets/icons/slides.svg';
import document from './../assets/icons/document.svg';
import galaxy from './../assets/icons/galaxy.svg';
import Tag from './../components/Tag';

function Projects() {

    return (
        <div id='projects' className='section'>
            <h2>Projects</h2>
            
            <div id='stocks' className='project'>
                <div className='vert glass'>
                    
                    <div className='project-label'>
                        <div className='hor'>
                            <div className='project-links'>
                                <div className='hor'>

                                    <a href='https://github.com/MaxwellJChen/snp-500' target='blank' title='GitHub Repository'>
                                        <img src={github} alt='GitHub' />
                                    </a>

                                    <a href='https://docs.google.com/presentation/d/19oBmw7dU6k7OxufPLGutSmjoAS_NSEhYLOFknppCA-U/edit?usp=sharing' target='blank' title='Slides'>
                                        <img src={slides} alt='Slides Symbol' />
                                    </a>
                                </div>
                            </div>

                            Nov 2024 — Dec 2024
                        </div>
                    </div>

                    
                    <div className='project-title'>
                        <div className='glass panel hor'>
                            <img src={stocks} alt='Stocks Symbol' />
                            <h4>Correlation-Driven Feature Extraction for S&P 500 Prediction with Machine Learning</h4>
                        </div>
                    </div>

                    Extracted a suite of features for S&P 500 stock prediction, single-handedly increasing neural network performance by 17%.

                    <div className='project-tags'>
                        <div className='hor'>
                            <Tag content={'Python'}/>
                            <Tag content={'Data Science'}/>
                            <Tag content={'PyTorch'}/>
                            <Tag content={'Pandas'}/>
                            <Tag content={'Machine Learning'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div id='speech-disfluences' className='project'>
                <div className='vert glass'>
                    
                    <div className='project-label'>
                        <div className='hor'>
                            <div className='project-links'>
                                <div className='hor'>
                                    <a href='https://docs.google.com/document/d/1AM16Qcufp2CDrQ7Hu9Fd0Sxu-RxArqRE/edit?usp=sharing&ouid=109208091310666571454&rtpof=true&sd=true' target='blank' title='Proposal'>
                                        <img src={document} alt='Document Symbol' />
                                    </a>

                                    <a href='https://docs.google.com/presentation/d/1ym_tdhuEXcM3D7PPiYlFOMQvvP1Bjhp1bxjz7sdi4v0/edit?usp=sharing' target='blank' title='Slides'>
                                        <img src={slides} alt='Slides Symbol' />
                                    </a>
                                </div>
                            </div>

                            Jan 2024 — Apr 2024
                        </div>
                    </div>

                    
                    <div className='project-title'>
                        <div className='glass panel hor'>
                            <img src={sound} alt='Audio Symbol' />
                            <h4>Identifying Speech Disfluencies with Weakly Supervised Audio Transformers</h4>
                        </div>
                    </div>

                    Trained deep audio transformers on Vanderbilt Developmental Stuttering Lab dataset to identify instances of stuttering in 
                    child speech.

                    <div className='project-tags'>
                        <div className='hor'>
                            <Tag content={'Python'}/>
                            <Tag content={'Transformers'}/>
                            <Tag content={'Agile Development'}/>
                            <Tag content={'Project Management'}/>
                            <Tag content={'Docker'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div id='surge' className='project'>
                <div className='vert glass'>
                    
                    <div className='project-label'>
                        <div className='hor'>
                            <div className='project-links'>
                                <div className='hor'>
                                    <a href='https://github.com/MaxwellJChen/SURGE' target='blank' title='GitHub Repository'>
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

                            Jun 2022 - Nov 2023
                        </div>
                    </div>

                    
                    <div className='project-title'>
                        <div className='glass panel hor'>
                            <img src={pill} alt='Pill Symbol' />
                            <h4>SURGE: Sequential Reinforcement Graph Agents for Accelerated Therapeutic Design</h4>
                        </div>
                    </div>

                    Designed carbon chains and drug-like, synthetically accessible molecules with reinforcement learning (proximal policy optimization, 
                    imitation learning, custom molecular environment) and graph neural networks.
                    
                    <div className='project-tags'>
                        <div className='hor'>
                            <Tag content={'Python'}/>
                            <Tag content={'Reinforcement Learning'}/>
                            <Tag content={'Graph Neural Networks'}/>
                            <Tag content={'OpenAI Gymnasium'}/>
                            <Tag content={'Drug Design'}/>
                        </div>
                    </div>
                    
                </div>
            </div>




            <div id='imagined-speech-decoding' className='project'>
                <div className='vert glass'>
                    
                    <div className='project-label'>
                        <div className='hor'>
                            <div className='project-links'>
                                <div className='hor'>
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

                            Sep 2021 - Mar 2022
                        </div>
                    </div>

                    
                    <div className='project-title'>
                        <div className='glass panel hor'>
                            <img src={brain} alt='Brain Symbol' />
                            <h4>Novel Feature Extraction and Noise Removal Techniques for Imagined Speech Decoding</h4>
                        </div>
                    </div>

                    Classified which of 3 words subjects were thinking about based on their brainwaves, achieving state-of-the-art 
                    53.1% accuracy with novel feature extraction and noise reduction combination.

                    <div className='project-tags'>
                        <div className='hor'>
                            <Tag content={'Python'}/>
                            <Tag content={'TensorFlow'}/>
                            <Tag content={'Artificial Neural Networks'}/>
                            <Tag content={'Time-Series Analysis'}/>
                        </div>
                    </div>
                </div>
            </div>



            <div id='gnet' className='project'>
                <div className='vert glass'>
                    
                    <div className='project-label'>
                        <div className='hor'>
                            <div className='project-links'>
                                <div className='hor'>
                                    <a href='https://docs.google.com/document/d/1N04WZAmsd1woNcYD6sUVYDnBIohy1x6L1R2fYLC-SUw/edit?usp=sharing' target='blank' title='Abstract'>
                                        <img src={document} alt='Document Symbol' />
                                    </a>

                                    <a href='https://drive.google.com/file/d/1RbZUBAv2FgcuN_YfHRF879Oo8iCdHn13/view?usp=sharing' target='blank' title='Poster'>
                                        <img src={poster} alt='Poster Symbol' />
                                    </a>
                                </div>
                            </div>

                            Sep 2020 - Mar 2021
                        </div>
                    </div>

                    
                    <div className='project-title'>
                        <div className='glass panel hor'>
                            <img src={galaxy} alt='Brain Symbol' />
                            <h4>GNet: Strong Gravitational Lens Identification with Convolutional Neural Networks</h4>
                        </div>
                    </div>
                    
                    Classified images of gravitational lensing with deep CNNs, achieving 83.5% accuracy on simulated lenses and 96.15% on real lensing.

                    <div className='project-tags'>
                        <div className='hor'>
                            <Tag content={'Python'}/>
                            <Tag content={'TensorFlow'}/>
                            <Tag content={'Computer Vision'}/>
                            <Tag content={'Deep Learning'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;