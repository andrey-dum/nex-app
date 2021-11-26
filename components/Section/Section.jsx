import React from 'react';
import Image from 'next/image';
import styles from './Section.module.scss';

export const Section = ({ title, children, flexColumn }) => {
    return (
        <div className={styles.section}>

            <div className={styles.sectionHeader}>
                <div className={styles.sectionTitle}>
                    { title }
                </div>
            </div>

            <div className={`${styles.sectionContent} ${flexColumn ? styles.flexColumn : ''}`}>
                {children}
            </div>

          
        </div>
    )
}

