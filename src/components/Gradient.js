import './Gradient.css';

function Gradient({ gradient, rotate, color='white' }) {

    return (
        <div className='gradient' style={{'transform': 'rotate(' + (rotate ? '180deg' : '0deg') + ')', 'backgroundColor': color}}>
            <div className='gradient1' />
            <div className='gradient2' />
            {/* <div className='gradient3' /> */}
            {/* <div className='gradient4' /> */}
            <div className='gradient-background' style={{'background-image': gradient}}/>
        </div>
    )
}

export default Gradient;