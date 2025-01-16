import './Projects.css';
import molecule from './../assets/icons/molecule.svg';
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
            <h1>Projects</h1>
            
            <div className='projects-wrapper hor'>
                <div id='stocks' className='project'>
                    <div className='project-container vert glass'>
                        <div className='project-label'>
                            <div className='hor'>
                                <div className='project-links'>
                                    <div className='hor'>
                                        <img className='project-icon' src={stocks} alt='Stocks Symbol' />

                                        <a href='https://github.com/MaxwellJChen/snp-500' target='blank' title='GitHub Repository'>
                                            <img id='github' src={github} alt='GitHub' />
                                        </a>

                                        <a href='https://docs.google.com/presentation/d/19oBmw7dU6k7OxufPLGutSmjoAS_NSEhYLOFknppCA-U/edit?usp=sharing' target='blank' title='Slides'>
                                            <img id='slides' src={slides} alt='Slides Symbol' />
                                        </a>
                                    </div>
                                </div>

                                Nov 2024 — Dec 2024
                            </div>
                        </div>

                        
                        <div className='project-title'>
                            <div className='glass panel hor'>
                                <h2>Correlation-Driven Feature Extraction for S&P 500 Prediction with Machine Learning</h2>
                            </div>
                        </div>

                        Extracted a suite of features for S&P 500 stock prediction, single-handedly increasing neural network performance by 17% in a team of 5.

                        <div className='project-tags'>
                            <div className='hor'>
                                <Tag content={'PyTorch'}/>
                                <Tag content={'Python'}/>
                                <Tag content={'NumPy'}/>
                                <Tag content={'Pandas'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='speech-disfluences' className='project'>
                    <div className='project-container vert glass'>
                        
                        <div className='project-label'>
                            <div className='hor'>
                                <div className='project-links'>
                                    <div className='hor'>
                                        <img className='project-icon' id='sound' src={sound} alt='Audio Symbol' />

                                        <a href='https://docs.google.com/document/d/1AM16Qcufp2CDrQ7Hu9Fd0Sxu-RxArqRE/edit?usp=sharing&ouid=109208091310666571454&rtpof=true&sd=true' target='blank' title='Proposal'>
                                            <img id='document' src={document} alt='Document Symbol' />
                                        </a>

                                        <a href='https://docs.google.com/presentation/d/1ym_tdhuEXcM3D7PPiYlFOMQvvP1Bjhp1bxjz7sdi4v0/edit?usp=sharing' target='blank' title='Slides'>
                                            <img id='slides' src={slides} alt='Slides Symbol' />
                                        </a>
                                    </div>
                                </div>

                                Jan 2024 — Apr 2024
                            </div>
                        </div>

                        
                        <div className='project-title'>
                            <div className='glass panel hor'>
                                <h2>Identifying Speech Disfluencies with Weakly Supervised Audio Transformers</h2>
                            </div>
                        </div>

                        Trained deep audio transformers on Vanderbilt Developmental Stuttering Lab dataset to identify instances of stuttering in 
                        child speech.

                        <div className='project-tags'>
                            <div className='hor'>
                                <Tag content={'Hugging Face'}/>
                                <Tag content={'Python'}/>
                                <Tag content={'LLMs'}/>
                                <Tag content={'Agile'}/>
                                <Tag content={'Management'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='surge' className='project'>
                    <div className='project-container vert glass'>
                        
                        <div className='project-label'>
                            <div className='hor'>
                                <div className='project-links'>
                                    <div className='hor'>
                                        <img className='project-icon' src={molecule} alt='Molecule Symbol' />

                                        <a href='https://github.com/MaxwellJChen/SURGE' target='blank' title='GitHub Repository'>
                                            <img id='github' src={github} alt='GitHub' />
                                        </a>
                                        
                                        <a href='https://docs.google.com/presentation/d/1t4zp9FhjKXMU1bKOA7R_HRIAx7G7S4ZU2srLXNw2FrA/edit?usp=sharing' target='blank' title='Poster'>
                                            <img id='poster' src={poster} alt='Poster Symbol' />
                                        </a>
                                        
                                        <a href='https://docs.google.com/presentation/d/1olUNJCFUpsFnzMUJdOc2ipAIsVjbMunaQKxM8u9Sz0E/edit?usp=sharing' target='blank' title='Slides'>
                                            <img id='slides' src={slides} alt='Slides Symbol' />
                                        </a>
                                    </div>
                                </div>

                                Jun 2022 - Nov 2023
                            </div>
                        </div>

                        
                        <div className='project-title'>
                            <div className='glass panel hor'>
                                <h2>SURGE: Sequential Reinforcement Graph Agents for Accelerated Therapeutic Design</h2>
                            </div>
                        </div>

                        Designed carbon chains and drug-like, synthetically accessible molecules with reinforcement learning and novel probabilistic graph neural network.
                        
                        <div className='project-tags'>
                            <div className='hor'>
                                <Tag content={'PyTorch'}/>
                                <Tag content={'Python'}/>
                                <Tag content={'NumPy'}/>
                                <Tag content={'Pandas'}/>
                            </div>
                        </div>
                        
                    </div>
                </div>




                <div id='imagined-speech-decoding' className='project'>
                    <div className='project-container vert glass'>
                        
                        <div className='project-label'>
                            <div className='hor'>
                                <div className='project-links'>
                                    <div className='hor'>
                                        <img className='project-icon' src={brain} alt='Brain Symbol' />

                                        <a href='https://docs.google.com/document/d/1akev5uc0mToU7PbgaWh9qRYgY3eeEqFochB3pevUsJQ/edit?usp=sharing' target='blank' title='Abstract'>
                                            <img id='document' src={document} alt='Document Symbol' />
                                        </a>

                                        <a href='https://drive.google.com/file/d/1wEBQFb1DBjf_zdExnNkXNtYeDLloo2om/view?usp=sharing' target='blank' title='Slides'>
                                            <img id='slides' src={slides} alt='Slides Symbol' />
                                        </a>

                                        <a href='https://drive.google.com/file/d/1glPcHmMthblDJouHRGcb1hTq7Y2I9Rt-/view?usp=sharing' target='blank' title='Poster'>
                                            <img id='poster' src={poster} alt='Poster Symbol' />
                                        </a>
                                    </div>
                                </div>

                                Sep 2021 - Mar 2022
                            </div>
                        </div>

                        
                        <div className='project-title'>
                            <div className='glass panel hor'>
                                <h2>Novel Feature Extraction and Noise Removal Techniques for Imagined Speech Decoding</h2>
                            </div>
                        </div>

                        Classified which of 3 words subjects were thinking about based on their brainwaves, achieving state-of-the-art 
                        53.1% accuracy with novel feature extraction and noise reduction combination.

                        <div className='project-tags'>
                            <div className='hor'>
                                <Tag content={'TensorFlow'}/>
                                <Tag content={'Python'}/>
                                <Tag content={'NumPy'}/>
                                <Tag content={'Pandas'}/>
                            </div>
                        </div>
                    </div>
                </div>



                <div id='gnet' className='project'>
                    <div className='project-container vert glass'>
                        
                        <div className='project-label'>
                            <div className='hor'>
                                <div className='project-links'>
                                    <div className='hor'>
                                        <img className='project-icon' src={galaxy} alt='Brain Symbol' />
                                        
                                        <a href='https://docs.google.com/document/d/1N04WZAmsd1woNcYD6sUVYDnBIohy1x6L1R2fYLC-SUw/edit?usp=sharing' target='blank' title='Abstract'>
                                            <img id='document' src={document} alt='Document Symbol' />
                                        </a>

                                        <a href='https://drive.google.com/file/d/1RbZUBAv2FgcuN_YfHRF879Oo8iCdHn13/view?usp=sharing' target='blank' title='Poster'>
                                            <img id='poster' src={poster} alt='Poster Symbol' />
                                        </a>
                                    </div>
                                </div>

                                Sep 2020 - Mar 2021
                            </div>
                        </div>

                        
                        <div className='project-title'>
                            <div className='glass panel hor'>
                                <h2>GNet: Strong Gravitational Lens Identification with Deep Convolutional Neural Networks</h2>
                            </div>
                        </div>
                        
                        Classified images of gravitational lensing with deep CNNs, achieving 83.5% accuracy on simulated lenses and 96.15% on real lensing.

                        <div className='project-tags'>
                            <div className='hor'>
                                <Tag content={'TensorFlow'}/>
                                <Tag content={'Python'}/>
                                <Tag content={'NumPy'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;