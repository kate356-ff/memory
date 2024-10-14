import './Card.css';

import { useState } from "react";

export function Card({url}) {
    // const [checkCard, setCheckCard] = useState(false);

    // const handleClick = () => {
    //     setCheckCard(!checkCard);
    // }

    // let className = `card ${checkCard ? 'card-check' : ''}`;
    
    return (
        <div className='imagecards'>
        <img className='card' src={url} alt='card'/>
    </div>
    )
};