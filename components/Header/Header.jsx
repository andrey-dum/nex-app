import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <Image src="/Logo.svg" alt="Vercel Logo" width={72} height={16} />
                    <div className={styles.headerLogoText}>
                        Test Task
                    </div>
                </div>
            </div>
        </div>
    )
}

