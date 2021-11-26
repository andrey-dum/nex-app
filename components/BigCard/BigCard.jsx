import React from 'react';
import styles from './BigCard.module.scss';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';


export const BigCard = ({btc, eth}) => {
    return (
        <div className={styles.card}>

            <div className={styles.cardLeft}>
                <div className={styles.cardTitle}>
                    Fonts & Colors <span>Matter</span>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardItemTitle}>
                        BTC
                    </div>

                    <div className={styles.cardItemData}>
                        <span className={styles.cardItemTotal}> ${btc}</span>
                        <span className={styles.cardItemGrow}>+8.5% <AiOutlineArrowUp />
                        </span>
                    </div>

                    <div className={styles.cardItemDesc}>
                        You’ll Learn A Lot From This Task
                    </div>
                </div>
            </div>

            <div className={styles.cardRight}>

           

                <div className={styles.cardItem}>
                    <div className={styles.cardItemTitle}>
                        ETH
                    </div>

                    <div className={styles.cardItemData}>
                        <span className={styles.cardItemTotal}> ${eth}</span>
                        <span className={`${styles.cardItemGrow} ${styles.rateDown}`}>-3.2% <AiOutlineArrowDown />
                        </span>
                    </div>

                    <div className={styles.cardItemDesc}>
                        You’ll Learn A Lot From This Task
                    </div>
                </div>


             </div>
            
            
        </div>
    )
}

