import React, {useState} from 'react';
import Image from 'next/image';
import styles from './Testimonal.module.scss';
import { FaStar } from 'react-icons/fa'
import { StarRating } from '../StarRating/StarRating';


export const Testimonal = ({ cardName, cardText, imageUrl, rating }) => {
    const [rate, setRate] = useState(null);

    return (
        <div className={`${styles.card }`}>


                <div className={styles.cardAvatar}>
                    <Image src={imageUrl || "/photo-1.jpg"} alt="" width={50} height={50}  />
                </div>

                <div className={styles.cardText}>
                        <div className={styles.cardExcerpt}>
                            <span>
                                {cardText}
                            </span>
                        </div>

                    <div className={styles.cardName}>
                        {cardName}
                    </div>
                </div>

                <div className={styles.cardData}>
                    <div className={styles.cardTime}>
                        5.50
                    </div> 
                    <div className={styles.cardStars}>
                        <StarRating setRating={(val) => setRate(val)} ratingValue={rate} stars={rating}  />
                    </div> 
                </div>
            
        </div>
    )
}

