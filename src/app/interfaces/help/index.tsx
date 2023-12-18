import React from 'react'
import styles from './styles.module.css'
import PrimaryBtn from '@/app/components/primaryBtn'
import Image from 'next/image'

const Help = () => {
    return (
        <section className={styles.help}>
            <div className={styles.isoImg}>

            <Image  src='/img/Isolation_Mode.svg' alt='svg' width={150} height={100}/>
            </div>
            <div className={styles.helpContainer}>
            <div className={styles.help1}>
            <h1>Future Humans <span>helps grow</span> your software service <span>company via</span> higher win %</h1>
            </div>
            <div className={styles.help2}>
                <p>Over the last 9 years we have seen and participated in thousands of client - supplier interviews and projects. We’ve observed what helps and especially - what prevents companies from winning, even though they might be the most competitive ones.</p>
                <p>Over 2021-2022 we’ve started coaching some of our suppliers to ensure that their potential is properly observed by clients and have found significant changes in win rates in such cases.</p>
                <p>Now, in 2023 - we have developed a package, that helps not only get more leads, but grow trust in your brand and win more clients (both in and outside of future humans).</p>
                <div className={styles.help2Btn}>

                <PrimaryBtn text='PACKAGES'/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Help