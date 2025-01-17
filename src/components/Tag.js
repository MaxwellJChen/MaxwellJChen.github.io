import './Tag.css';
import { motion } from 'motion/react';

function Tag({ content, link }) {
    return (
        <div className='tag glass panel'>
            <a href={link}>
                {content}
            </a>
        </div>
    )
}

export default Tag;