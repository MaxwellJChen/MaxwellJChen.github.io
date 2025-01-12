import './Slider.css';
import { motion } from 'motion/react';

function Slider({ text }) {

    return (
        <div className='slider-wrapper'>
            <motion.div
                className='slider'
                initial={{'transform': 'translateX(-100%)'}}
                whileInView={{'transform': 'translateX(0%)'}}
                transition={{duration: 0.75, ease: 'easeOut'}}
            >
                {text}
            </motion.div>
        </div>
    )
}

export default Slider;