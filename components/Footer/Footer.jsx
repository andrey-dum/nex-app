import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.footer}>
      
                <div className={styles.footerText}>
                    Don’t Forget To Deploy Project To GitHub Pages
                </div>
                <div className={styles.footerCopyright}>
                    © Test Task Limited™, 2020. All rights reserved.
                    <span>Terms Of Service | Privacy Policy</span>
                </div>
        </div>
    )
}

