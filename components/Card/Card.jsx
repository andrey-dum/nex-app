import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';

export const Card = ({ showPosition, cardName, cardPosition, cardText, imageUrl }) => {

    return (
        <div className={`${styles.card } ${!showPosition ? styles.sectionCard : ''}`}>

            <div className={styles.cardHeader}>

                <div className={styles.cardAvatar}>
                    <Image src={imageUrl || "/photo-1.jpg"} alt="" width={115} height={115}  />
                </div>

                <div className={styles.cardInfo}>
                    <div className={styles.cardName}>
                        {cardName}
                    </div>

                    { showPosition &&  
                        <div className={styles.cardPos}>
                            {cardPosition && cardPosition}
                        </div> 
                    }
                    
                </div>
            </div>

            <div className={styles.cardText}>
                <span>
                    {cardText}
                </span>
            </div>
            
        </div>
    )
}

