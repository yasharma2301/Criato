import React,{useState} from 'react'

export default function CardTooltip({ delay, restaurant }) {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 100);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className='bg-white'>
            
        </div>
    )
}
