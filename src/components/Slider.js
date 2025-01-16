import './Slider.css';
import { motion } from 'motion/react';

function Slider({ content, vertical }) {

    return (
        <div className='slider-wrapper'>
            <motion.div
                className='slider'
                initial={{'transform': vertical ? 'translateY(-100%)' : 'translateX(-100%)'}}
                whileInView={{'transform': 'translate(0%)'}}
                transition={{duration: vertical ? 0.5 : 0.75, ease: 'easeOut'}}
            >
                {content}
            </motion.div>
        </div>
    )
}

export default Slider;