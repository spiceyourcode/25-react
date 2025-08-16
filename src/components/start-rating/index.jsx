import { FaRegStar } from 'react-icons/fa';
import styles from './style.module.css';
import { useState } from 'react';

function StarRating({noOfStars=5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentindex) {
        setRating(getCurrentindex);
    }
    function handleMouseEnter(getCurrentindex) {
        setHover(getCurrentindex);

    }
    function handleMouseLeave() {
        setHover(rating);
    }
    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index = index + 1
                    return <FaRegStar
                        key={index}
                        className={index <= hover || index <= rating ? styles.active : styles.inactive}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                })
            }
        </div>
    )
}
export default StarRating;
