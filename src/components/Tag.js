import './Tag.css';
import { motion } from 'motion/react';

function Tag({ content }) {
    return (
        <div className='tag glass panel'>
            {content}
        </div>
    )
}

export default Tag;