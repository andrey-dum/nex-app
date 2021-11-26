import React from 'react';
import Image from 'next/image';
import styles from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.ldsRing}>
                <div /><div /><div /><div />
            </div>
            Fetching data...
        </div>
    )
}

